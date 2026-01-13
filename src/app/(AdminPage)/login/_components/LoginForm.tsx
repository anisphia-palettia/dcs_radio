"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {useAuthStore} from "@/hook/use-auth.store";
import {Card, CardContent} from "@/components/ui/card";

export default function LoginForm() {
    const router = useRouter();

    const { login, loading, error, user } = useAuthStore();

    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        }
    }, [user, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        await login(
            form.get("email") as string,
            form.get("password") as string
        );
    };

    return (
        <Card className="bg-accent">
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <FieldSet>
                        <FieldLegend>Login Dengan Email</FieldLegend>
                        <FieldDescription>
                            Masukan Email dan Password yang Sesuai
                        </FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                />
                            </Field>
                        </FieldGroup>

                        {error && (
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </FieldSet>
                </form>
            </CardContent>
        </Card>
    );
}
