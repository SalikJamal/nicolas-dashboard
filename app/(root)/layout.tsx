import { IReactChildren } from "@/lib/types"
import { UserButton } from "@clerk/nextjs"


export default function HomeLayout({ children }: IReactChildren) {
    return (
        <div>
            <nav className="flex justify-end px-5 items-center h-20 w-full">
                <UserButton afterSignOutUrl="/sign-in" />
            </nav>
            <main>
                {children}
            </main>
        </div>
        
    )
}