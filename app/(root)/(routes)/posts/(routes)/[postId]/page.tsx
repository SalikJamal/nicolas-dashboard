import { getPost } from "@/actions/get-post"
import AdvancedEditor from "@/components/editor/advanced-editor"

interface IPostPageProps {
    params: {
        postId: string;
    }
}


export default async function PostPage({ params }: IPostPageProps) {
    
    const post = await getPost(params.postId)
    const formattedPost = {
        ...post,
        image: "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
    }
    
    return (
        <div className="flex w-full justify-center items-center px-4 md:px-6">
            <AdvancedEditor post={formattedPost} />
        </div>
    )
}