import React from 'react';
import "../styles/Cards.css";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function Cards(props) {

    const shoes = props.products.map((product, key) => {
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

function mapStateToProps(state) {
    return { 
        products: state.product
    }
};

export default connect(
    mapStateToProps, 
    null
)(Cards);
