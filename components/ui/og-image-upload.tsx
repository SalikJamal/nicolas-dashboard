import Image from "next/image"
import { ChangeEvent } from "react"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IOGImageUploadProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}


export default function OGImageUpload({ value, onChange, disabled }: IOGImageUploadProps) {
    
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0]

        if(file) {
            const reader = new FileReader()
            reader.onload = () => {
                onChange(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }
    
    return (
        <div className="relative w-full h-[200px] flex gap-4 items-center">
            {value ? (
                <Image
                    className="rounded-md object-cover"
                    quality={100}
                    src={value}
                    fill
                    alt="open graph image"
                />
            ) : 
            
                <div className="flex flex-col gap-2.5 justify-center items-center bg-gray-100 rounded-md size-full">
                    <div className="relative">
                        <Button 
                            className="text-sm rounded-2xl py-3.5 px-2.5 border-2 w-auto bg-white cursor-pointer text-black" 
                            type="button"
                            variant="link"
                            disabled={disabled}
                        >
                            <PlusIcon className="size-5" />
                            <input
                                className="absolute top-0 left-0.5 opacity-0 w-10 h-10 cursor-pointer"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Button>
                    </div>
                    <span className="font-medium text-slate-900/50">Upload media</span>
                </div>
            }
        </div>
    )
}