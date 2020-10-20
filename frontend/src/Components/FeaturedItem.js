import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Fade from 'react-reveal/Fade';

function FeaturedItem() {

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());      
    }, []);

    return ( 
        loading ? 
        <div>Loading...</div> 
        : 
        error ? 
        <div>{error}</div> 
        :
        <section className="featured">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>
            </div>  
            <Fade right cascade>
                <div className="split">
                    {Array.from(products).map((product, key) => {
                        if (product.featured) {
                            return  <Link to={"/product-details/" + product._id} className="featured__item">
                                            <img src={product.image} alt={product.name + "__" + product._id + key} className="featured__img" />
                                            <p className="featured__details"><span className="price">${product.price}</span>{product.name}</p>
                                    </Link>
                        }
                    })}
                </div>
            </Fade>
        </section> 
    )
};

export default FeaturedItem;