import MainNav from "@/components/main-nav"
import { IReactChildren } from "@/lib/types"
import { UserButton } from "@clerk/nextjs"


export default function HomeLayout({ children }: IReactChildren) {
    return (
        <div>
            <div className="flex h-20 mb-10 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSwitchSessionUrl="/" />
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
        
    )
}