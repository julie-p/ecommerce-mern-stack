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

                <section className="cart__page container">
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
                                    <img src="../imgs/shoe-1.png" />
                                    <div>
                                        <p>Vans Old Skool</p>
                                        <small>Size : 40</small><br/>
                                        <a href="">Remove</a>
                                    </div>

                                </div>
                            </td>
                            <td><input type="number" value="1"/></td>
                            <td>$99</td>
                            <td>$99</td>
                        </tr>

                        <tr>
                            <td>
                                <div className="cart__info">
                                    <img src="../imgs/shoe-6.png" />
                                    <div>
                                        <p>Off White x Air Jordan</p>
                                        <small>Size : 40</small><br/>
                                        <a href="">Remove</a>
                                    </div>

                                </div>
                            </td>
                            <td><input type="number" value="1"/></td>
                            <td>$180</td>
                            <td>$180</td>
                        </tr>

                        <tr>
                            <td>
                                <div className="cart__info">
                                    <img src="../imgs/shoe-2.png" />
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
                                <td>$394.00</td>
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
