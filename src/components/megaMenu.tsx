import React, {useState} from "react";
import "./megaMenu.css";
import Card from "./card"


interface MegaMenuProps {
    title: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({title}) => {
    return(
        <section className="megaMenu-container">
            <div className="megaMenu-tilte">
                <h2>{title}</h2>
            </div>
            <div className="megaMenu-opcion">
                <Card />
            </div>
        </section>
    );
};

const listTitle = () => {
    const titles = ["Home", "About", "Services", "Contact", ];

    return (
        <div>
            {titles.map((title, index) => (
                <MegaMenu key={index} title={title} />
            ))}
        </div>
    )
}

export default listTitle;