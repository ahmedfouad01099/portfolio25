import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import { notFound } from "next/navigation"

interface Post {
    id: number
    title: string
    img: string
    category: string
    author: string
    date: string
}

// Generate static params at build time
export async function generateStaticParams() {
    return data.map((post: Post) => ({
        id: post.id.toString(),
    }))
}

// This runs at build time for each blog post
export default function BlogDetails({ params }: { params: { id: string } }) {
    const blogPost = data.find((post: Post) => String(post.id) === String(params.id))

    if (!blogPost) {
        notFound()
    }

    return (
        <Layout>
            <div className="blog-details">
                <h1>{blogPost.title}</h1>
                <div className="blog-meta">
                    <span>By {blogPost.author}</span>
                    <span>{blogPost.date}</span>
                    <span>Category: {blogPost.category}</span>
                </div>
                {/* Add more blog content here */}
            </div>
        </Layout>
    )
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
    const blogPost = data.find((post: Post) => String(post.id) === String(params.id))
    
    if (!blogPost) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: blogPost.title,
        description: `Read ${blogPost.title} by ${blogPost.author}`,
    }
}