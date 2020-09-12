import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function FeaturedItem() {

    const featured = data.products.map((product, key) => {
        if (product.featured) {
            return <Link to="/shop" className="featured__item">
                        <img src={product.image} alt={product.name+ "__" + key} className="featured__img" />
                        <p className="featured__details"><span className="price">${product.price}</span>{product.name}</p>
                   </Link>
        }
    });

    return (
        <section className="featured">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>
            </div>  
            <div className="split">
                {featured}
            </div>
        </section> 
    )
};

export default FeaturedItem;
