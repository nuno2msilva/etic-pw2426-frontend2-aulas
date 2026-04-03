import {useState, useEffect} from 'react';
import Button from './Button';

const contadorStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    padding: '0',
    margin: '0.5rem'
}   

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [pausa, setPausa] = useState(false);
    
    useEffect(() => {
        if (!pausa) {
            const interval = setInterval(() => {
                setContador(contador+1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }
    }, [contador, pausa]);

    const pauseButton = () => {
        setPausa(!pausa);
    }
    
    return (
        <div>
            <p style={contadorStyle}>{contador}</p>
            <Button name={!pausa ? "Pause Me!" : "Unpause Me!"} onClick={pauseButton} />
        </div>
    );
}

export default Contador