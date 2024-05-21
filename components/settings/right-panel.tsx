import { cn } from "@/lib/utils"

interface IRightPanelProps {
    className?: string;
}


export default function RightPanel({ className }: IRightPanelProps) {
    return (
        <div className={cn("flex flex-col py-5 space-y-5 min-w-[400px] border-r shadow-xl", className)}>
            <h1 className="text-center">
                Right Panel
            </h1>
        </div>
    )
}