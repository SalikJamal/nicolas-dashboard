import LeftPanel from "@/components/settings/left-panel"
import RightPanel from "@/components/settings/right-panel"
import Header from "@/components/ui/header"
import { IReactChildren } from "@/lib/types"


export default function SettingsLayout({ children }: IReactChildren) {
    return (
        <>
            <Header title="Settings" />
            <div className="flex flex-col min-h-[calc(100%-5rem)] sm:flex-row justify-between">
                <LeftPanel />
                <main className="flex justify-center md:mt-40">
                    {children}
                </main>
                <RightPanel />
            </div>
        </>
    )
}