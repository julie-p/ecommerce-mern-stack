import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Cart.css';
import Menu from '../Components/Menu';
import Links from '../Components/Links';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

function Cart(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, []);

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
