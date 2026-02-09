import {useState} from 'react';

const ToggleImage = () => {
    const [toggle, setToggle] = useState(false);

return (
    <div>
        {toggle ? (
            <div>
                <img src="/rambley.png" style={{ width: "100px", height: "100px"}} />
                <button onClick={() => setToggle(!toggle)}>Toggle Image</button>
            </div>
        ) : (
            <button onClick={() => setToggle(!toggle)}>Toggle Image</button>
        )}
    </div>
); 
};

export default ToggleImage;