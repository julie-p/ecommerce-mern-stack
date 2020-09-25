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
                        <img src={product.image}/>
                        <p>{product.description}</p>
                        <h3>Size :</h3>
                        {/* <select onChange={(e) => { setSize(e.target.value) }}>
                            <option>Select your size</option>
                            {product.sizes.map(x => 
                                <option key={x} value={x}>{x} EU/FR</option>
                            )}
                        </select> */}
                        <h3>Quantity :</h3>
                        {/* <select onChange={(e) => { setQty(e.target.value) }}>
                            <option>Select quantity</option>
                            {product.sizes.map(x => 
                                <option key={x} value={x + 1}>{x + 1} </option>
                            )}
                        </select> */}
                        <Link>
                            <button>Buy Now</button>
                        </Link>
                    </div>
                    )
                }
                
            </section>
            <Footer />
        </div>
    )
};

export default ProductDetails;
