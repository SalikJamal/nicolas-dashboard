"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Settings2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import LeftPanel from "@/components/settings/left-panel"

interface IHeaderProps {
    title: string;
}


export default function Header({ title }: IHeaderProps) {
    
    const [isMounted, setIsMounted] = useState(false)

    const router = useRouter()
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null

    return (
        <div className="flex bg-white shadow-sm text-center h-20 p-5 border-b">
            <Sheet>
                <SheetTrigger>
                    <Button
                        className="inline-flex md:hidden"
                        variant="outline"
                        size="icon"
                        onClick={() => {}}
                    >
                        <Settings2 className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="md:hidden w-full h-full overflow-auto px-0" side="left">
                    <SheetHeader>
                        <SheetTitle className="text-3xl text-center">Settings</SheetTitle>
                    </SheetHeader>
                    <LeftPanel className="bg-transparent shadow-none border-r-0 min-w-full mb-5" />
                </SheetContent>
            </Sheet>

            <Button
                className="hidden md:inline-flex"
                variant="link"
                onClick={() => router.back()}
            >
                <ArrowLeft className="mr-2 size-4" />
                <p className="text-base">Back</p>
            </Button>
            
            <div className="flex justify-center items-center w-full">
                <h1 className="font-medium text-2xl">{title}</h1>
            </div>
        </div>
    )
}