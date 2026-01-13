"use client"

import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";

export default function Page() {
    const {data} = authClient.useSession()
    const logout = async () => {
        await authClient.signOut()
    }
    console.log(data)
    return (
        <div>
                <Button onClick={logout}>Keluar</Button>

        </div>
    )
}