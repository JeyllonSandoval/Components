import React from "react";
import "./tripleInfoPanel.css";

const TripleInfoPanel = () => {
    return (
        <section className="triple-info-panel">
            <article className="triple-info-panel_item">
                <h3>Nivel Fácil</h3>
                <a href=""><button>Botones </button></a>
                <a href=""><button>Footer </button></a>
                <a href=""><button>Navbar </button></a>
                <a href=""><button>Card</button></a>
                <a href=""><button>Progress Bar </button></a>
                <a href=""><button>Back-to-Top Button</button></a>
                <a href=""><button>Alerts </button></a>
                <a href=""><button>Tooltip </button></a>
                <a href=""><button>Dropdown </button></a>
            </article>
            <article className="triple-info-panel_item">
                <h3>Nivel Intermedio</h3>
                <a href=""><button>Accordion </button></a>
                <a href=""><button>Tabs </button></a>
                <a href=""><button>Pagination </button></a>
                <a href=""><button>Hamburger Menu</button></a>
                <a href=""><button>Search Bar</button></a>
                <a href=""><button>Sticky Header</button></a>
                <a href=""><button>Image Lightbox</button></a>
                <a href=""><button>Loader</button></a>
                <a href=""><button>Toast Notifications</button></a>
                <a href=""><button>Sidebar</button></a>
                <a href=""><button>Breadcrumbs</button></a>
            </article>
            <article className="triple-info-panel_item">
                <h3>Nivel Avanzado</h3>
                <a href=""><button>Flip Card</button></a>
                <a href=""><button>Countdown Timer</button></a>
                <a href=""><button>Formularios interactivos</button></a>
                <a href=""><button>Mega Menu</button></a>
                <a href=""><button>Gallery </button></a>
                <a href=""><button>Timeline</button></a>
                <a href=""><button>Testimonials</button></a>
                <a href=""><button>Step Progress</button></a>
                <a href=""><button>Video Player</button></a>
                <a href=""><button>Floating Action Button</button></a>
            </article>
            <article className="triple-info-panel_item">
                <h3>Nivel Experto </h3>
                <a href=""><button>Carousel </button></a>
                <a href=""><button>Calendar </button></a>
                <a href=""><button>Kanban Board</button></a>
                <a href=""><button>Map with Markers</button></a>
                <a href=""><button>Chat Widget</button></a>
                <a href=""><button>Table</button></a>
                <a href=""><button>Notification Bell</button></a>
                <a href=""><button>Login/Register Form</button></a>
            </article>
        </section>
    );
};

export default TripleInfoPanel;