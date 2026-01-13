import {Metadata} from "next";
import {Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import LoginForm from "@/app/(AdminPage)/login/_components/LoginForm";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

export default function Page() {
    return (
        <main className="container mx-auto">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full max-w-md">
                    <LoginForm/>
                </div>
            </div>
        </main>
    )
}