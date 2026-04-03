import { useParams } from 'react-router-dom'


const styles = {
    width: "100vw", 
    height: "100vh", 
    alignItems: "center", 
    justifyContent: "center",
    textAlign: "center" as const,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
}

const Post = () => {
    const { id } = useParams()

    return (
        <div style={styles}>
            <h1>Post Details</h1>
            <p>Post ID: {id}</p>
        </div>
    )
}

export default Post