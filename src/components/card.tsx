import React from "react";
import "./card.css";

interface CardProps {
    img: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ img, title, description, link }) => {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}><button>Watch</button></a>
            </div>
        </div>
    );
};

export default Card;
