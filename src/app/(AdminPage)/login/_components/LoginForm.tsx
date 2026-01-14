"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/hooks/use-auth.store";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const { login, loading, error, user } = useAuthStore();

  useEffect(() => {
    if (user) {
      toast.success("Login berhasil 👋");
      router.push("/dashboard");
    }
  }, [user, router]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    await login(form.get("email") as string, form.get("password") as string);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">Selamat Datang 👋</h1>
            <p className="text-sm text-muted-foreground">
              Login untuk masuk ke dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <FieldSet>
              <FieldLegend>Login Dengan Email</FieldLegend>
              <FieldDescription>
                Masukkan email dan password yang terdaftar
              </FieldDescription>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@mail.com"
                    required
                    autoComplete="email"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                  />
                </Field>
              </FieldGroup>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Logging in..." : "Login"}
              </Button>
            </FieldSet>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
