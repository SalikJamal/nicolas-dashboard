import { getPosts } from "@/actions/get-posts"


export default async function PostsPage() {
    
    const posts = await getPosts()
    
    return (
        <div>
            {posts.map(post => (
                <div className="my-20" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}