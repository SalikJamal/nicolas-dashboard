import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface IHeaderProps {
    title: string;
}


export default function Header({ title }: IHeaderProps) {
    
    const router = useRouter()
    
    return (
        <div className="flex bg-white shadow-sm text-center h-20 p-5 border-b">
            <Button
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