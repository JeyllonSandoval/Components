import React from 'react';
import './infoPanel.css';

const InfoPanel = () => {
    return (
        <div className='info-panel-container'>
            <section className='info-panel'>
                <div className='image-container'>
                    <img src="https://uno-website-assets.s3.amazonaws.com/wp-content/uploads/2023/05/15161739/100-component-hero.png" alt="image component" />
                </div>
                <div className='text-container'>
                    <article>
                        <h2>What are Web Components?</h2>
                        <p>Web components are a key technology in modern web application 
                            development. They allow developers to create custom, reusable 
                            elements that work natively in modern browsers. 
                            This capability makes it easy to build modular and scalable 
                            user interfaces, eliminating the need to rely exclusively on 
                            specific libraries or frameworks.</p>
                    </article>
                    <a href="ruta-a-tu-pagina.html">
                        <button>See all components</button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default InfoPanel;