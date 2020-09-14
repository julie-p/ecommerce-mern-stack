import React from 'react';
import "../styles/Cards.css";
import { connect } from 'react-redux';

function CardsDiscount(props) {

    console.log(props.products);

    const discount = props.products.map((product, key) => {
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
    });

    return (
        <div>
            <div className="cards__container">
            {discount}
        </div>
        </div>
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
)(CardsDiscount);
