import { useNavigate } from 'react-router-dom'

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

const About = () => {
    const navigate = useNavigate();
    return (
        <div style={styles}>
            <p>This is the About page of the Vite & React application.</p>
            <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    )
}

export default About