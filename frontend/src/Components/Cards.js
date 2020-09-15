import React, { useEffect } from 'react';
import "../styles/Cards.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function Cards() {

    const productList = useSelector(state => state.productList);
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
        <section className="cards__container">
            {
                products.map((product, key) => {
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
                                    <Link>
                                        <button>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                })
            }
        </section>
    )
};

export default Cards;