import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Cards.css";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function Cards(props) {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
            const { data } = await axios.get("/api/products");
            setProducts(data);
            props.addProducts(data);
        }
        fetchData();
    }, []);

    const shoes = products.map((product, key) => {
        return  <div className="cards__card">
                    <div className="cards__imgBx">
                        <img src={product.image} alt={product.name + "__" + product._id + key}/>
                    </div>
                    <div className="cards__contentBx">
                        <h2>{product.name}</h2>
                        <div className="cards__size">
                            <h3>Size :</h3>
                            <span>38</span>
                            <span>39</span>
                            <span>40</span>
                            <span>42</span>
                        </div>
                        <div className="cards__price">
                            <h3>Price :</h3>
                            <span>${product.price}</span>
                        </div>
                        <Link to={'/cart/' + product._id}>
                            <button>Buy Now</button>
                        </Link>
                    </div>
                </div>
    });

    return (
        <section className="cards__container">
            {shoes}
        </section>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        addProducts: function(products) {
            dispatch({type: 'addProducts', product: products})
        }
    }
};

export default connect(
    null, 
    mapDispatchToProps
)(Cards);
