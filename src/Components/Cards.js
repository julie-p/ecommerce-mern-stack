import React from 'react';
import "../styles/Cards.css";
import data from '../data';

function Cards() {

    const shoes = data.products.map((product, key) => {
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
                        <a href="#" className="btn">Buy Now</a>
                    </div>
               </div>
    })

    return (
        <div className="cards__container">
            {shoes}
        </div>
    )
};

export default Cards;
