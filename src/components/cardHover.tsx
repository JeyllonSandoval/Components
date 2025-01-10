import React from "react";
import "./cardHover.css";
import dataInfoLogo from '../assets/data/infoLogo.json';

interface CardHoverProps {
    title: string;
    img: string;
    alt: string;
}

const CardHover: React.FC<CardHoverProps> = ({ title, img, alt }) => {
    return (
        <div className="cardHover_container">
            <article className="cardHover">
                <div>
                    <img
                        src={img}
                        alt={alt}
                    />
                </div>
                <div className="cardHover_content">
                    <h1>{title}</h1>
                </div>
            </article>
        </div>
    );
}

const ListCardHover = () => {
    const allItems: CardHoverProps[] = dataInfoLogo.filter(
        (item): item is CardHoverProps => item.title !== undefined && item.img !== undefined && item.alt !== undefined
    );

    return (
        <div className="cardHover-container">
            {allItems.map((item, index) => {
                return <CardHover key={index} title={item.title} img={item.img} alt={item.alt} />;
            })}
        </div>
    );
};


export default ListCardHover;