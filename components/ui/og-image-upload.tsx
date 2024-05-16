import { ChangeEvent } from "react"
import Image from "next/image"
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
        <div className="flex gap-4 items-center">
            <Image 
                className="size-[75px] rounded-md object-cover"
                sizes="100%"
                quality={100}
                src={value || "https://placehold.co/1200x630/png"}
                alt="open graph image"
                width={75}
                height={75}
            />
            <div className="relative">
                <Button 
                    className="text-sm rounded-full w-auto bg-gray-100 cursor-pointer text-black" 
                    type="button"
                    variant="ghost"
                    disabled={disabled}
                >
                    Upload favicon
                    <input
                        className="absolute top-0 left-2.5 opacity-0 w-28 h-10 cursor-pointer"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Button>
            </div>
        </div>
    )
}