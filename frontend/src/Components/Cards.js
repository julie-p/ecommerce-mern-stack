import React, { useState, useEffect } from 'react';
import "../styles/Cards.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function Cards() {

    const [ size, setSize ] = useState(37);
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
                                        <select value={size} onChange={(e) => { setSize(e.target.value) }}>
                                            {product.sizes.map(x => 
                                                <option key={x} value={x}>{x} EU/FR</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="cards__price">
                                        <h3>Price :</h3>
                                        <span>${product.price}</span>
                                    </div>
                                    <Link to={'/cart/' + product._id + "?size=" + size}>
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