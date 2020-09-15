import React from 'react';
import '../styles/Cart.css';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

function Cart() {
    return (
        <div>
            <Menu />
            <Links />

            <section className="cart__page">
                <h1>My Cart</h1>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>

                    <tr>
                        <td>
                            <div className="cart__info">
                                <img src="../imgs/shoe-2.png" alt='' />
                                <div>
                                    <p>Puma Clyde Core</p>
                                    <small>Size : 40</small><br/>
                                    <a href="">Remove</a>
                                </div>

                            </div>
                        </td>
                        <td><input type="number" value="1"/></td>
                        <td>$115</td>
                        <td>$115</td>
                    </tr>
                </table>

                <div class="cart__totalPrice">
                    <table>
                        <tr>
                            <td>Total :</td>
                            <td>$115.00</td>
                        </tr>
                        <div class="cart__btn">
                            <button className="btn cart__checkout">Checkout</button>

                        </div>
                                
                            
                    </table>
                </div>
            </section>

            <section>
                <Newsletter />
            </section>
            
            <Footer />
        </div>
    )
};

export default Cart;