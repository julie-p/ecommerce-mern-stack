import React, { useEffect } from 'react';
import "../styles/Cards.css";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function CardsDiscount() {

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
        <div>
            <div className="cards__container">
            {
                products.map((product, key) => {
                    if (product.discount >= 20) {
                        return <div className="cards__card">
                                    <div className="cards__imgBx">
                                        <img src={product.image} alt={product.name+ "__" + key}/>
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
                                        <button href="#">Buy Now</button>
                                    </div>
                               </div>
                    }
                })
            }
        </div>
        </div>
    )
};

export default CardsDiscount;
