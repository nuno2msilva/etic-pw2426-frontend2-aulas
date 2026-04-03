const buttonStyle = {
    border: "none",
    borderRadius: "6px",
    color: "white",
    borderWidth: "1px",
    borderColor: "black",
    margin: "12px",
    width: "270px",
    height: "50px"
}

interface ButtonProps {
    name: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Button = ({ name, onClick, style }: ButtonProps) => {
    return (
        <button style={{ ...buttonStyle, ...style }} onClick={onClick}> {name} </button>
    )
}

export default Button;