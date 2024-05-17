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


export default function LeftPanel() {
    
    const [option, setOption] = useState("metadata")

    return (
        <div className="flex flex-col py-5 space-y-5 min-w-[400px] border-r shadow-xl">
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