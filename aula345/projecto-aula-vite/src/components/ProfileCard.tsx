const cardStyle = {
    padding :"6px",
    backgroundColor: "blue",
    borderRadius: "10px",
};

const cardStyleInactive ={
    padding: "6px",
    backgroundColor: "red",
    borderRadius: "10px",
}

const nameStyle = {
    fontSize: "24px",
    color: "white",
};

const emailStyle = {
    fontSize: "18px",
    color: "gray",
};

const picStyle = {
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
};

const ProfileCard =({name, email, profilePic, active= false}:{name?: string, email: string, profilePic: string, active?:boolean} ) => {
return <div style={active ? cardStyle : cardStyleInactive}>
    {name ? <h2 style={nameStyle}>{name}</h2> : null}
    <div style={emailStyle}>{email}</div>
    <img style={picStyle} src={profilePic}/>
    
</div>

};

export default ProfileCard;