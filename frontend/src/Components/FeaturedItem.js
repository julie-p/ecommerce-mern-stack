import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FeaturedItem() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
            const { data } = await axios.get("/api/products");
            setProducts(data);
        }
        fetchData();
    }, []);

    const featured = products.map((product, key) => {
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

export default FeaturedItem;