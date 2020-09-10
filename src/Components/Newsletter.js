import React from 'react';
import "../styles/Newsletter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Newsletter() {
    
    return (
        <section className="newsletter">
            <div className="newsletter__container">
                <h1>Subscribe
                    <span> To Our Newsletter</span>
                </h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>

                <div className="newsletter__txtb">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button type="button">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Newsletter;
