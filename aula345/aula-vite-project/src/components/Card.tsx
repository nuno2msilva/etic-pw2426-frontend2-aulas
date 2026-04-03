import type React from "react"

const cardImage = {
    width: '270px',
    height: 'auto',
    borderRadius: '24px',
    padding: "12px",
    margin: "0"
}

const cardTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black'
}

const cardDescription = {
    fontSize: '16px',
    color: 'darkgray',
    padding: '0',
    margin: '0'
}

const cardAltDescription = {
    fontSize: '16px',
    color: 'darkgray',
    padding: '0',
    margin: '0'
}

const cardContainer = {
    padding: "6px",
    backgroundColor: "white",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "space-between",
    width: "300px",
    height: "425px",
    margin: "24px"
}

const contentWrapper = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    flexGrow: 1
}

const Card = ({title, description, altDescription, profilePic, children} : {title: string, description: string | React.ReactNode, altDescription?: string, profilePic: string, children?: React.ReactNode}) => {
    return (
        <div style={cardContainer}>
            <div style={contentWrapper}>
                <img style={cardImage} src={profilePic} alt={title} />
                <h2 style={cardTitle}>{title}</h2>
                <p style={cardDescription}>{description}</p>
                <p style={cardAltDescription}>{altDescription}</p>
            </div>
            {children}
        </div>
    )
}

export default Card