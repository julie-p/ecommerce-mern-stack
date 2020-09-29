import React, { useState, useEffect } from 'react';
import '../styles/ProductDetails.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Footer from '../Components/Footer';

function ProductDetails(props) {

    const [ size, setSize ] = useState(0);
    const [ qty, setQty ] = useState(1);

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));

        return () => {
            //
        }
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    };

    return (
        <div>
            <Menu />
            <Links/>
            
            <section>
                {loading ? 
                    <div>Loading...</div>
                    :
                    error ?
                    <div>{error}</div>
                    :
                    (
                    <div>
                        <h1>{product.name}</h1>
                        <img src={product.image} alt=""/>
                        <p>{product.description}</p>
                        <span>${product.price}</span>
                        {/* <h3>Size :</h3>
                        <select onChange={(e) => { setSize(e.target.value) }}>
                            <option>Select your size</option>
                            {[...Array(product.sizes).keys()].map(x => 
                                <option key={x} value={x}>{x} EU/FR</option>
                            )}
                        </select> */}
                        <h3>Quantity :</h3>
                        <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                            {[...Array(product.stock).keys()].map(x =>
                                <option value={x+1}>{x + 1}</option>
                            )}
                        </select>
                        <button onClick={handleAddToCart}>Buy Now</button>
                    </div>
                    )
                }
                
            </section>
            <Footer />
        </div>
    )
};

export default ProductDetails;
