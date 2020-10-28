import React, { useState, useEffect } from 'react';
import '../styles/ProductDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Footer from '../Components/Footer';

function ProductDetails(props) {

    /* const [ size, setSize ] = useState(0); */
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
            
            <section className="product-details">
                {loading ? 
                    <div>Loading...</div>
                    :
                    error ?
                    <div>{error}</div>
                    :
                    (
                        <div className="product__container">
                            <div className="product__img">
                                <img src={product.image} alt=""/>
                            </div>
                            <div className="product__details">
                                <div className="product__content">
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>

                                    <div className="product__quantity">
                                        <h4>Quantity :</h4>
                                        <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                            {[...Array(product.stock).keys()].map(x =>
                                                <option value={x+1}>{x + 1}</option>
                                            )}
                                        </select>
                                    </div>
                                    
                                    <h3>${product.price}</h3>
                                    {product.stock <= 0 ? 
                                    <button disabled>Out Of Stock</button>
                                    :
                                    <button onClick={handleAddToCart}>Buy Now</button>
                                    }
                                </div>

                                {/* <h3>Size :</h3>
                                <select onChange={(e) => { setSize(e.target.value) }}>
                                    <option>Select your size</option>
                                    {[...Array(product.sizes).keys()].map(x => 
                                        <option key={x} value={x}>{x} EU/FR</option>
                                    )}
                                </select> */}
                        
                            </div>
                        </div>
                        
                    )
                }
                
            </section>
            <Footer />
        </div>
    )
};

export default ProductDetails;
