import { Post } from "@/src/components/Post"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Posts",
    description: "Posts page",
}

export default function Posts() {
    return <div>
        <Post />
        <Post />
        <Post />    
    </div>
}
