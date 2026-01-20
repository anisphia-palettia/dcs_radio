import { Metadata } from "next";
import LoginForm from "@/app/(AdminPage)/login/_components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Page() {
  return (
    <main className="container mx-auto">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
