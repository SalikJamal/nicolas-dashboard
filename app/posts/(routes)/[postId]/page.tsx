interface IPostPageProps {
    params: {
        postId: string;
    }
}


export default function PostPage({ params }: IPostPageProps) {
    return (
        <div>
            <h1>{params.postId}</h1>
        </div>
    )
}