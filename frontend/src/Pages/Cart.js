import React from 'react';
import '../styles/Cart.css';
import data from '../data';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

function Cart(props) {

    const product = data.products.find(x => x._id === props.match.params.id);

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
                                    <img src={product.image} alt={product.name+ "__" + product._id} />
                                    <div>
                                        <p>{product.name}</p>
                                        <small>Size : 40</small><br/>
                                        <a href="">Remove</a>
                                    </div>

                                </div>
                            </td>
                            <td><input type="number" value="1"/></td>
                            <td>${product.price}</td>
                            <td>${product.price}</td>
                        </tr>
                    </table>

                    <div class="cart__totalPrice">
                        <table>
                            <tr>
                                <td>Total :</td>
                                <td>$000.00</td>
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
