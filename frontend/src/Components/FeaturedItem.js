import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function FeaturedItem(props) {

    useEffect(() => {
        const fetchData = async () => { 
            const { data } = await axios.get("/api/products");
            props.addProducts(data);
        }
        fetchData();
    }, []);

    const featured = props.products.map((product, key) => {
        if (product.featured) {
            return  <Link to="/shop" className="featured__item">
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

function mapDispatchToProps(dispatch) {
    return {
        addProducts: function(products) {
            dispatch({type: 'addProducts', product: products})
        }
    }
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FeaturedItem);