import {NextRequest, NextResponse} from "next/server";
import {auth} from "./lib/auth";


export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl

    const session  = await auth.api.getSession({
        headers : request.headers,
    })

    const isLoggedIn = !!session
    const isDashboard = pathname.startsWith("/dashboard")
    const isLoginPage = pathname === "/login"

    if (!isLoggedIn && isDashboard) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (isLoggedIn && isLoginPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
}