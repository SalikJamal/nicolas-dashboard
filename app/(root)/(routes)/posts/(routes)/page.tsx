
import { getPosts } from "@/actions/get-posts"
import Post from "@/components/post"


export default async function PostsPage() {
    
    const posts = await getPosts()
    
    return (
        <section className="flex flex-col gap-10 w-full items-center">
            <h1 className="w-3/4 text-6xl font-bold text-center">Posts</h1>
            
            <div className="w-3/4 px-4 md:px-6">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}