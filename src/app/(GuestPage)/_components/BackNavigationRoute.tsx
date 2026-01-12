import Link from "next/link";
import {cn} from "@/lib/utils";

interface BackNavigationRouteProps {
    to : string;
    url : string;
    className? : string;
}

export function  BackNavigationRoute({to, url, className}: BackNavigationRouteProps) {
    return(
        <Link className={cn("text text-muted-foreground hover:text-primary", className)} href={url}> ← Kembali ke {to}</Link>
    )
}