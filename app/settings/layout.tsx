import LeftPanel from "@/components/settings/left-panel"
import RightPanel from "@/components/settings/right-panel"
import Header from "@/components/ui/header"
import { IReactChildren } from "@/lib/types"

interface ISettingsLayoutProps extends IReactChildren {
    leftPanel: React.ReactNode;
    rightPanel: React.ReactNode;
}


export default function SettingsLayout({ children, leftPanel, rightPanel }: ISettingsLayoutProps) {
    return (
        <div>
                <Header title="Settings" />
                <div className="flex flex-col sm:flex-row justify-between">
                    <LeftPanel />
                    <div className="flex justify-center md:mt-40">
                        {children}
                    </div>
                    <RightPanel />
                </div>
        </div>
    )
}