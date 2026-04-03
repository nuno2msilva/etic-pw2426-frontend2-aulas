import notFoundImage from '../../assets/404.png'

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

const NotFound = () => {
    return (
        <div style={styles}>
        <img src={notFoundImage} alt="404 logo" style={{ height: '450px', marginRight: '10px' }} />
        <h1>Página não encontrada</h1>
        </div>
    ) 

}


export default NotFound;