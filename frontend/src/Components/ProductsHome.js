import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Fade from 'react-reveal/Fade';

function ProductsHome() {

    const productList = useSelector((state) => state.productList);
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
        <section className="products">
            <div className="container">
                <h2 className="section-title">Our products</h2>
                {Array.from(products).map((product, key) => {
                    if (!product.featured && product.name === 'Vans Old Skool') {
                        return  <Fade right cascade>
                                    <article className="product shoe-red spacing">
                                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                        <h3 className="products__title">A really nice shoe</h3>
                                        <p className="products__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                                        <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                    </article>
                                </Fade>
                    } else if (!product.featured && product.name === 'Puma Clyde Core') {
                        return  <Fade left cascade>
                                    <article className="product shoe-white shoe-left spacing">
                                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                        <h3 className="products__title">A really nice shoe</h3>
                                        <p className="products__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                                        <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                    </article>
                                </Fade>
                    } else if (!product.featured && product.name === 'Louis Vuitton Sneakers') {
                        return  <Fade right cascade>
                                    <article className="product shoe-blue spacing">
                                        <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                        <h3 className="products__title">A really nice shoe</h3>
                                        <p className="products__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                                        <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                    </article>
                                </Fade>
                    }
                })}
            </div>
        </section>
    )
};

export default ProductsHome;