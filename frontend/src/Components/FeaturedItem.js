import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function FeaturedItem(props) {

    console.log(props.products);
    const featured = props.products.map((product, key) => {
        if (product.featured) {
            return <Link to="/shop" className="featured__item">
                        <img src={product.image} alt={product.name + "__" + product._id + key} className="featured__img" />
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

function mapStateToProps(state) {
    return { 
        products: state.product
    }
};

export default connect(
    mapStateToProps, 
    null
)(FeaturedItem);