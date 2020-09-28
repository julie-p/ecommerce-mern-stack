import React from 'react';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import Tools from '../Components/Tools';
import CardsDiscount from '../Components/CardsDiscount';
import Footer from '../Components/Footer';

function Outlet() {
    
    return (
        <div>
            <Menu />

            <Header />

            <Tools />

            <CardsDiscount />
            
            <Footer />
        </div>
    )
};

export default Outlet;
