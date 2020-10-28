import React, { useEffect } from 'react';
import "../styles/Cards.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Fade from 'react-reveal/Fade';

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
        <Fade left cascade>
        <section className="cards__container">
            {
                Array.from(products).map((product, key) => {
                    return  <div className="cards__card">
                                <div className="cards__imgBx">
                                    <img src={product.image} alt={product.name + "__" + product._id + key}/>
                                </div>
                                <div className="cards__contentBx">
                                    <h2>{product.name}</h2>
                                    <div className="cards__info">
                                        {product.stock <= 0 ?
                                            <div>
                                                <div className="cards__price">
                                                    <h3>Price :</h3>
                                                    <span>${product.price}</span>
                                                </div>
               
                                                <Link to={'/product-details/' + product._id}>
                                                    <button disabled>Out of stock</button>
                                                </Link>
                                            </div>
                                            :
                                            <div>
                                                <h3>In stock</h3>
                                                <div className="cards__price">
                                                    <h3>Price :</h3>
                                                    <span>${product.price}</span>
                                                </div>
               
                                                <Link to={'/product-details/' + product._id}>
                                                    <button>See Now</button>
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                })
            }
        </section>
        </Fade>
    )
};

export default Cards;