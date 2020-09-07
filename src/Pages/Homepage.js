import React from 'react';
import Header from '../Components/Header';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
           <Header />

            <main>
                <section className="featured">
                    <div className="container">
                        <h2 className="featured__sectionTitle">Featured Products</h2>
                    </div>  
                    <div className="split">
                    <Link className="featured__item">
                        <img src="../imgs/shoe-4.png" alt="" className="featured__img" />
                        <p className="featured__details"><span className="price">$99</span>shoe name</p>
                    </Link>
                    <Link className="featured__item">
                        <img src="../imgs/shoe-5.png" alt="" className="featured__img" />
                        <p className="featured__details"><span className="price">$99</span>shoe name</p>
                    </Link>
                    <Link className="featured__item">
                        <img src="../imgs/shoe-6.png" alt="" className="featured__img" />
                        <p className="featured__details"><span className="price">$99</span>shoe name</p>
                    </Link>
                    </div>
                </section> 

                <section className="products">
                    <div className="container">
                        <h2 className="products__sectionTitle">Our products</h2>

                        <article className="product shoe-red spacing">
                            <img src="../imgs/shoe-1.png" alt="" className="products__image"/>
                            <h3 className="products__title">A really nice shoe</h3>
                            <p className="products__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
                                perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>
                            <Link className="btn">Buy now</Link>
                        </article>

                        <article className="product shoe-white shoe-left spacing">
                            <img src="../imgs/shoe-2.png" alt="" className="products__image"/>
                            <h3 className="products__title">A really nice shoe</h3>
                            <p className="products__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
                                perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>
                            <Link className="btn">Buy now</Link>
                        </article>

                        <article className="product shoe-blue spacing">
                            <img src="../imgs/shoe-3.png" alt="" className="products__image"/>
                            <h3 className="products__title">A really nice shoe</h3>
                            <p className="products__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
                                perspiciatis facilis beatae laudantium quidem enim sit sequi!</p>
                            <Link className="btn">Buy now</Link>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Homepage;
