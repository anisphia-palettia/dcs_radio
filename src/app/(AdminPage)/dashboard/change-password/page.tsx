import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ProfileForm } from "./_components/profile-form";
import { PasswordForm } from "./_components/password-form";
import { redirect } from "next/navigation";

export default async function ChangePasswordPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and change your password.
        </p>
      </div>
      <div className="grid gap-8">
        <ProfileForm user={session.user} />
        <PasswordForm />
      </div>
    </div>
  );
}
