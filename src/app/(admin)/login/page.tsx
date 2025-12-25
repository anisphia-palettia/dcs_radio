"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        setErrorMessage(error.message || "Email atau password salah.");
      }
      if (data) {
        console.log("Login Berhasil:", data);
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
      console.error("Unexpected error", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold text-center mb-4">Masuk ke Akun</h2>

          {errorMessage && (
            <div className="alert alert-error shadow-lg mb-4 py-2 text-sm">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Input Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@contoh.com"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading} // Disable input saat loading
              required
            />
          </div>

          {/* Input Password */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          {/* Tombol Login dengan Status Loading */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary w-full ${
                isLoading ? "btn-disabled" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Memproses...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
