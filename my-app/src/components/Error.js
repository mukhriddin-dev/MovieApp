import React from 'react';
import Err from './Err.css';
function Error(props) {
    return (
        <div>
            <h1>NOT FOUND</h1>
            <p className="zoom-area"><b>NOT FOUND</b> 404 page. </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>

        </div>
    );
}

export default Error;