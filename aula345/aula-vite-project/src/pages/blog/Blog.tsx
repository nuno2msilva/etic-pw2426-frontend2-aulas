import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Post {
    id: number
    title: string
    content: string
    author: string
    date: string
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/test.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts')
                }
                return response.json()
            })
            .then(data => {
                setPosts(data.posts)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div style={{ padding: '6rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Blog</h1>
            {posts.map(post => (
                <article key={post.id} style={{ 
                    marginBottom: '2rem', 
                    padding: '1rem', 
                    border: '1px solid #ddd',
                    borderRadius: '8px' 
                }}>
                    <h2>{post.title}</h2>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                        By {post.author} | {post.date}
                    </p>
                    <p>{post.content}</p>
                    <button 
                        onClick={() => navigate(`/blog/${post.id}`)}
                    >
                        Read More
                    </button>
                </article>
            ))}
            
        </div>
    )
}

export default Blog