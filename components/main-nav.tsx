"use client"

import { HTMLAttributes } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export default function MainNav({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    
    const pathname = usePathname()
    
    const routes = [
        {
            href: "/",
            label: "Dashboard",
            active: pathname === "/"
        },
        {
            href: "/posts",
            label: "Posts",
            active: pathname === "/posts"
        },
        {
            href: "/settings",
            label: "Settings",
            active: pathname === "/settings"
        }
    ]
    
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
            {routes.map(route => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary", 
                        route.active ? "text-black" : "text-muted-foreground"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}