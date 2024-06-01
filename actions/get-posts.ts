import { IPost } from "@/lib/types"


export const getPosts = async (): Promise<IPost[]> => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    return posts

}