import { getPost } from "@/actions/get-post"
import Editor from "@/components/editor"
import AdvancedEditor from "@/components/editor/advanced-editor"
import Post from "@/components/post"

interface IPostPageProps {
    params: {
        postId: string;
    }
}


export default async function PostPage({ params }: IPostPageProps) {
    
    const post = await getPost(params.postId)
    

    return (
        <div className="flex w-full justify-center items-center px-4 md:px-6">
            <AdvancedEditor post={post} />
        </div>
    )
}