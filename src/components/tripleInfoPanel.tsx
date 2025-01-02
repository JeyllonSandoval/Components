import React from "react";

const TripleInfoPanel = () => {
    return (
        <section className="triple-info-panel">
            <article className="triple-info-panel__item">
                <h3>1,200</h3>
                <p>Followers</p>
            </article>
            <article className="triple-info-panel__item">
                <h3>2,200</h3>
                <p>Following</p>
            </article>
            <article className="triple-info-panel__item">
                <h3>1,000</h3>
                <p>Posts</p>
            </article>
        </section>
    );
};

export default TripleInfoPanel;