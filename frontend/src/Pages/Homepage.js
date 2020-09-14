import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import FeaturedItem from '../Components/FeaturedItem';
import ProductsHome from '../Components/ProductsHome';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import '../styles/Homepage.css';

import { connect } from 'react-redux';

function Homepage(props) {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchData = async () => { 
            const { data } = await axios.get("/api/products");
            setProducts(data);
            props.addProducts(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Menu />

            <Header />

            <main>
                <FeaturedItem />

                <Newsletter />
                
                <ProductsHome />
            </main> 
            
            <Footer />          
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        addProducts: function(products) {
            dispatch({type: 'addProducts', product: products})
        }
    }
};

export default connect(
    null, 
    mapDispatchToProps
)(Homepage);
