import { useState, useEffect } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
        setClock(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
}, []);

return (
    <div>
      <div>Hora Atual: {clock}</div>
    </div>
);
};

export default Clock;