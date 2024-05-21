"use client"

import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import MetadataEditor from "@/components/settings/metadata-editor"
import { cn } from "@/lib/utils"

interface ILeftPanelProps {
    className?: string;
}


export default function LeftPanel({ className }: ILeftPanelProps) {
    
    const [option, setOption] = useState("metadata")

    return (
        <div className={cn("flex flex-col py-5 space-y-5 min-w-[400px] border-r shadow-xl", className)}>
            <div className="px-5">
                <Select
                    onValueChange={(e) => setOption(e)} 
                    defaultValue={option}
                >
                    <SelectTrigger className="w-full border border-gray-300 shadow-lg rounded-lg">
                        <SelectValue defaultValue={option} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="metadata">Meta Data</SelectItem>
                            <SelectItem value="seo">SEO</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            
            <Separator />

            {option === "metadata" && (
                <MetadataEditor />
            )}
        </div>
    )
}