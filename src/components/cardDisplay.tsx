import React from "react";
import "./cardDisplay.css";
import Card from "./card";

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
    const allCards: CardProps[] = [
        {
            img: "",
            type: "Nivel Fácil",
            title: "Botones",
            description: "Botones estilizados que responden a interacciones del usuario, como clics o cambios de estado (hover, disabled).",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Footer",
            description: "Sección final de la página que generalmente incluye información de contacto, enlaces o derechos de autor.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Navbar",
            description: "Barra superior para navegación principal con enlaces a las secciones de la página.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Card",
            description: "Tarjetas que muestran información resumida, como perfiles, productos o artículos.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Progress Bar",
            description: "Barra visual que muestra el progreso de una tarea o carga.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Back-to-Top Button",
            description: "Botón que permite al usuario regresar rápidamente al inicio de la página.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Alerts",
            description: "Mensajes emergentes que capturan la atención del usuario para mostrar información importante.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Tooltip",
            description: "Mensajes flotantes que aparecen al pasar el cursor sobre un elemento.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Fácil",
            title: "Dropdown",
            description: "Menú que muestra opciones adicionales al hacer clic o pasar el cursor.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Accordion",
            description: "Secciones colapsables que permiten organizar contenido en paneles desplegables.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Tabs",
            description: "Pestañas que permiten alternar entre diferentes vistas o contenidos en la misma área.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Pagination",
            description: "Componente que organiza contenido en múltiples páginas navegables.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Hamburger Menu",
            description: "Menú compacto que se expande al hacer clic, común en sitios móviles.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Search Bar",
            description: "Componente para ingresar consultas de búsqueda, con opciones de autocompletar.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Sticky Header",
            description: "Encabezado que permanece visible mientras se desplaza por la página.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Image Lightbox",
            description: "Componente para ampliar imágenes en una ventana flotante.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Loader",
            description: "Indicador animado que muestra que algo está cargando.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Toast Notifications",
            description: "Notificaciones emergentes que desaparecen automáticamente después de un tiempo.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Sidebar",
            description: "Barra lateral que puede contener enlaces de navegación o contenido adicional.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Intermedio",
            title: "Breadcrumbs",
            description: "Rastro de enlaces que muestra la ubicación actual del usuario en la jerarquía de la página.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Flip Card",
            description: "Tarjetas animadas que giran para mostrar contenido en el reverso.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Countdown Timer",
            description: "Temporizador que cuenta hacia atrás hasta un evento específico.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Formularios interactivos",
            description: "Formularios estilizados con validación en tiempo real y mensajes de error personalizados.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Mega Menu",
            description: "Menú desplegable grande con múltiples categorías y enlaces.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Gallery",
            description: "Cuadrícula interactiva para mostrar imágenes, con vistas ampliadas o efectos especiales.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Timeline",
            description: "Diseño para mostrar eventos en orden cronológico.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Testimonials",
            description: "Componente para mostrar comentarios o citas de clientes.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Step Progress",
            description: "Componente que indica el avance a través de múltiples etapas.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Video Player",
            description: "Reproductor de video personalizado con controles.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Avanzado",
            title: "Floating Action Button",
            description: "Botón flotante que abre opciones o acciones rápidas.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Carousel",
            description: "Componente interactivo para mostrar imágenes o contenido deslizante.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Calendar",
            description: "Componente para mostrar fechas y eventos.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Kanban Board",
            description: "Tablero interactivo para gestionar tareas arrastrando y soltando.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Map with Markers",
            description: "Mapa interactivo con marcadores para ubicaciones específicas.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Chat Widget",
            description: "Ventana interactiva para mensajes o soporte en tiempo real.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Table",
            description: "Tablas de datos con funciones como ordenación, filtrado o búsqueda.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Notification Bell",
            description: "Icono interactivo para mostrar notificaciones recientes.",
            link: "",
        },
        {
            img: "",
            type: "Nivel Experto",
            title: "Login/Register Form",
            description: "Formularios estilizados para iniciar sesión o crear cuentas.",
            link: "",
        },
        
    ];

    const types = ["Nivel Fácil", "Nivel Intermedio", "Nivel Avanzado", "Nivel Experto"];

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
