import React from "react";
import "./tripleInfoPanel.css";

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
    const allItems: itemProps[] = [
        {
            type: "Nivel Fácil",
            title: "Botones",
        },
        {
            type: "Nivel Fácil",
            title: "Footer",
        },
        {
            type: "Nivel Fácil",
            title: "Navbar",
        },
        {
            type: "Nivel Fácil",
            title: "Card",
        },
        {
            type: "Nivel Fácil",
            title: "Progress Bar",
        },
        {
            type: "Nivel Fácil",
            title: "Back-to-Top Button",
        },
        {
            type: "Nivel Fácil",
            title: "Alerts",
        },
        {
            type: "Nivel Fácil",
            title: "Tooltip",
        },
        {
            type: "Nivel Fácil",
            title: "Dropdown",
        },
        {
            type: "Nivel Intermedio",
            title: "Accordion",
        },
        {
            type: "Nivel Intermedio",
            title: "Tabs",
        },
        {
            type: "Nivel Intermedio",
            title: "Pagination",
        },
        {
            type: "Nivel Intermedio",
            title: "Hamburger Menu",
        },
        {
            type: "Nivel Intermedio",
            title: "Search Bar",
        },
        {
            type: "Nivel Intermedio",
            title: "Sticky Header",
        },
        {
            type: "Nivel Intermedio",
            title: "Image Lightbox",
        },
        {
            type: "Nivel Intermedio",
            title: "Loader",
        },
        {
            type: "Nivel Intermedio",
            title: "Toast Notifications",
        },
        {
            type: "Nivel Intermedio",
            title: "Sidebar",
        },
        {
            type: "Nivel Intermedio",
            title: "Breadcrumbs",
        },
        {
            type: "Nivel Avanzado",
            title: "Flip Card",
        },
        {
            type: "Nivel Avanzado",
            title: "Countdown Timer",
        },
        {
            type: "Nivel Avanzado",
            title: "Formularios interactivos",
        },
        {
            type: "Nivel Avanzado",
            title: "Mega Menu",
        },
        {
            type: "Nivel Avanzado",
            title: "Gallery",
        },
        {
            type: "Nivel Avanzado",
            title: "Timeline",
        },
        {
            type: "Nivel Avanzado",
            title: "Testimonials",
        },
        {
            type: "Nivel Avanzado",
            title: "Step Progress",
        },
        {
            type: "Nivel Avanzado",
            title: "Video Player",
        },
        {
            type: "Nivel Avanzado",
            title: "Floating Action Button",
        },
        {
            type: "Nivel Experto",
            title: "Carousel",
        },
        {
            type: "Nivel Experto",
            title: "Calendar",
        },
        {
            type: "Nivel Experto",
            title: "Kanban Board",
        },
        {
            type: "Nivel Experto",
            title: "Map with Markers",
        },
        {
            type: "Nivel Experto",
            title: "Chat Widget",
        },
        {
            type: "Nivel Experto",
            title: "Table",
        },
        {
            type: "Nivel Experto",
            title: "Notification Bell",
        },
        {
            type: "Nivel Experto",
            title: "Login/Register Form",
        },        
    ];

    const types = ["Nivel Fácil", "Nivel Intermedio", "Nivel Avanzado", "Nivel Experto"];
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