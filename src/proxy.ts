import {NextRequest, NextResponse} from "next/server";
import {authService} from "@/service/auth.service";

export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl

    const data = await authService.session()

    const isLoggedIn = !!data
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