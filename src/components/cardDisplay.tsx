import React from "react";
import "./cardDisplay.css";
import Card from "./card";

interface CardProps {
    img: string;
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
    const allCards: CardProps[] = [
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Fácil",
            description: "Descripción del nivel fácil",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Intermedio",
            description: "Descripción del nivel intermedio",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Avanzado",
            description: "Descripción del nivel avanzado",
            link: "#link",
        },
        {
            img: "https://via.placeholder.com/150",
            title: "Nivel Experto",
            description: "Descripción del nivel experto",
            link: "#link",
        },
    ];

    const titles = ["Nivel Fácil", "Nivel Intermedio", "Nivel Avanzado", "Nivel Experto"];

    return (
        <div>
            {titles.map((title, index) => {
                // Filtrar las tarjetas que coincidan con el título actual
                const filteredCards = allCards.filter((card) => card.title === title);
                return <CardDisplay key={index} title={title} cards={filteredCards} />;
            })}
        </div>
    );
};

export default ListCardDisplay;
