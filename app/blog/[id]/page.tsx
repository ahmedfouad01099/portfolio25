'use client'
import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface Post {
    id: number
    title: string
    img: string
    category: string
    author: string
    date: string
}

// This function runs at build time to generate static paths
export async function generateStaticParams() {
    return data.map((post: Post) => ({
        id: post.id.toString(),
    }))
}

export default function BlogDetails() {
    let Router = useParams()
    const [blogPost, setBlogPost] = useState<Post | null>(null)
    const id = Router?.id

    useEffect(() => {
        if (id) {
            const post = data?.find((post: Post) => String(post.id) === String(id))
            setBlogPost(post || null)
        }
    }, [id])

    return (
        <>
            <Layout>
                {blogPost ? (
                    <>
                        {blogPost.title}
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </Layout>
        </>
    )
}