import React from 'react';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import FeaturedItem from '../Components/FeaturedItem';
import ProductsHome from '../Components/ProductsHome';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import '../styles/Homepage.css';

function Homepage() {

    return (
        <div>
            <Menu />

            <Header />

            <main>
                <FeaturedItem />

                <ProductsHome />

                <Newsletter />

            </main> 
            
            <Footer />          
        </div>
    )
};

export default Homepage;
