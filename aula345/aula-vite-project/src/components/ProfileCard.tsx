const cardStyles = {
    padding: "6px",
    backgroundColor: "green",
    borderRadius: "10px"
}

const cardStylesInactive = {
    padding: "6px",
    backgroundColor: "red",
    borderRadius: "10px"
}


const nameStyle = {
    fontSize: "24px",
    color: "black",
}

const activeNameStyle = {
    fontSize: "24px",
    color: "white"
}

const emailStyle = {
    fontSize: "20px",
    color: "black"
}

const activeEmailStyle = {
    fontSize: "20px",
    color: "white"
}

const profilePicStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginTop: "10px"
}
const ProfileCard = ({name, email, profilePic, isActive} : {name: string, email: string, profilePic: string, isActive: boolean}) => {
    return (
        <div style={isActive ? cardStyles : cardStylesInactive}>
            {name ? <h2 style={isActive ? activeNameStyle : nameStyle}>{name}</h2> : null}
            <p style={isActive ? activeEmailStyle : emailStyle}>{email}</p>
            <img style={profilePicStyle} src={profilePic} alt="Card Default Placeholder" />
        </div>
    )
}

export default ProfileCard