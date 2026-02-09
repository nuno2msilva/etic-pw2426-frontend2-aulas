import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onButtonClick }) => {
  return (
    <div className="card-component">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};

export default Card;
