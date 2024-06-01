import { PencilIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { 
    TooltipProvider, 
    Tooltip, 
    TooltipTrigger, 
    TooltipContent 
} from "@/components/ui/tooltip"
import { IPost } from "@/lib/types"
import { cn } from "@/lib/utils"

interface IPostProps {
    post: IPost;
    className?: string;
}


export default function Post({ post, className }: IPostProps) {
    return (
        <div
            className={cn("mb-8 grid grid-cols-1 md:grid-cols-2 rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-950 relative", className)}                        
            key={post.id}
        >
            <div className="order-2 md:order-1">
                <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger asChild>
                        <Link className="absolute top-4 right-4 z-10" href={`/posts/${post.id}`}>
                            <PencilIcon className="size-4" />
                            <span className="sr-only">Edit post</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>Edit</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <h3 className="text-xl font-semibold p-6 capitalize">{post.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 p-6 first-letter:capitalize">{post.body}</p>
            </div>
            <div className="order-1 md:order-2">
                <Image
                    className="size-full rounded-lg object-cover"
                    src="/placeholder.png"
                    alt="Post Image"
                    width={600}
                    height={400}
                    quality={100}
                />
            </div>
        </div>
    )
}