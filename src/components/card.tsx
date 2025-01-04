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
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <a href={link}><button>Watch</button></a>
        </div>
    );
};

export default Card;
