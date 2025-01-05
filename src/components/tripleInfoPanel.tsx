import React from "react";
import "./tripleInfoPanel.css";
import dataComponents from '../assets/data/components.json';

interface itemProps {
    title: string;
    type: string;
}

interface TripleInfoPanelProps {
    title: string;
    items: itemProps[];
}

const TripleInfoPanel: React.FC<TripleInfoPanelProps> = ({title, items = []}) => {
    return (
        <section className="triple-info-panel">
            <article className="triple-info-panel_item">
                <h3>{title}</h3>
                {items.map((item, index) => (
                    <a href="" key={index}><button>{item.title}</button></a>
                ))}
            </article>
        </section>
    );
};

const ListTripleInfoPanel = () => {
    const allItems: itemProps[] = dataComponents

    const types = ["Easy Level", "Intermediate Level", "Advanced Level", "Expert Level"];
    return (
        <div className="triple-info-panel-container">
            {types.map((type, index) => {
                const filteredItems = allItems.filter(item => item.type === type);
                return <TripleInfoPanel key={index} title={type} items={filteredItems} />;
            })}
        </div>
    );
};

export default ListTripleInfoPanel;