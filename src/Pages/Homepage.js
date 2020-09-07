import React from 'react';
import Header from '../Components/Header';
import FeaturedItem from '../Components/FeaturedItem';
import ProductsHome from '../Components/ProductsHome';
import '../styles/Homepage.css';

function Homepage() {

    return (
        <div>
           <Header />

            <main>
                <FeaturedItem />

                <ProductsHome />
            </main>
        </div>
    )
};

export default Homepage;
