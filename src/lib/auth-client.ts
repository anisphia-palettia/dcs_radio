import { createAuthClient } from "better-auth/react"
import {ENV} from "@/constants/env";
import {adminClient} from "better-auth/client/plugins";
export const authClient = createAuthClient({
    baseURL: ENV.API_URL,
    plugins : [
        adminClient()
    ]
})

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;