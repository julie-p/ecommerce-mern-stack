import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

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
                        return  <article className="product shoe-red spacing">
                                    <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                    <h3 className="products__title">A really nice shoe</h3>
                                    <p className="products__description">{product.description}</p>
                                    <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                </article>
                    } else if (!product.featured && product.name === 'Puma Clyde Core') {
                        return  <article className="product shoe-white shoe-left spacing">
                                    <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                    <h3 className="products__title">A really nice shoe</h3>
                                    <p className="products__description">{product.description}</p>
                                    <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                </article>
                    } else if (!product.featured && product.name === 'Louis Vuitton Sneakers') {
                        return  <article className="product shoe-blue spacing">
                                    <img src={product.image} alt={product.name+ "__" + key} className="products__image"/>
                                    <h3 className="products__title">A really nice shoe</h3>
                                    <p className="products__description">{product.description}</p>
                                    <Link to={'/product-details/' + product._id} className="btn">Buy now</Link>
                                </article>
                    }
                })}
            </div>
        </section>
    )
};

export default ProductsHome;