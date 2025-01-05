import React from "react";
import "./cardDisplay.css";
import Card from "./card";
import dataComponents from '../assets/data/components.json'

interface CardProps {
    img: string;
    type: string;
    title: string;
    description: string;
    link: string;
}

interface CardDisplayProps {
    title: string;
    cards: CardProps[];
}

const CardDisplay: React.FC<CardDisplayProps> = ({ title, cards }) => {
    return (
        <section className="cardDisplay-container">
            <div className="cardDisplay-title">
                <h2>{title}</h2>
            </div>
            <div className="cardDisplay-cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        img={card.img}

                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
};

const ListCardDisplay = () => {
    const allCards: CardProps[] = dataComponents;

    const types = ["Easy Level", "Intermediate Level", "Advanced Level", "Expert Level"];

    return (
        <div>
            {types.map((type, index) => {
                // Filtrar las tarjetas que coincidan con el título actual
                const filteredCards = allCards.filter((card) => card.type === type);
                return <CardDisplay key={index} title={type} cards={filteredCards} />;
            })}
        </div>
    );
};

export default ListCardDisplay;
