import { IPost } from "@/lib/types"


export const getPost = async (postId: string): Promise<IPost> => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await res.json()

    return post

}