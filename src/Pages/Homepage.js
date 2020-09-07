import React from 'react';
import Header from '../Components/Header';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import data from '../data';

function Homepage() {

    const featured = data.products.map((product, key) => {
        if (product.featured) {
            return <Link className="featured__item">
                        <img src={product.image} alt={"shoe__" + key} className="featured__img" />
                        <p className="featured__details"><span className="price">${product.price}</span>{product.name}</p>
                   </Link>
        }
    });

    const products = data.products.map((product, key) => {
        if (!product.featured && product.name === 'Shoe 1') {
            return <article className="product shoe-red spacing">
                        <img src={product.image} alt={"shoe__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        } else if (!product.featured && product.name === 'Shoe 2') {
            return <article className="product shoe-white shoe-left spacing">
                        <img src={product.image} alt={"shoe__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        } else if (!product.featured && product.name === 'Shoe 3') {
            return <article className="product shoe-blue spacing">
                        <img src={product.image} alt={"shoe__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        }
    })

    return (
        <div>
           <Header />

            <main>
                <section className="featured">
                    <div className="container">
                        <h2 className="featured__sectionTitle">Featured Products</h2>
                    </div>  
                    <div className="split">
                        {featured}
                    </div>
                </section> 

                <section className="products">
                    <div className="container">
                        <h2 className="products__sectionTitle">Our products</h2>
                        {products}
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Homepage;
