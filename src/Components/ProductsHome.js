import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductsHome() {

    const products = data.products.map((product, key) => {
        if (!product.featured && product.name === 'Shoe 1') {
            return <article className="product shoe-red spacing">
                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        } else if (!product.featured && product.name === 'Shoe 2') {
            return <article className="product shoe-white shoe-left spacing">
                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        } else if (!product.featured && product.name === 'Shoe 3') {
            return <article className="product shoe-blue spacing">
                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                        <h3 className="products__title">A really nice shoe</h3>
                        <p className="products__description">{product.description}</p>
                        <Link className="btn">Buy now</Link>
                   </article>
        }
    });

    return (
        <section className="products">
            <div className="container">
                <h2 className="section-title">Our products</h2>
                {products}
            </div>
        </section>
    )
};

export default ProductsHome;
