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
                {
                cartItems.length === 0 ?
                <h1>Your cart is empty</h1>
                :
                <div>
                    <h1>My Cart</h1>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>

                            {
                            cartItems.map((item, key) => (
                            <tr>
                                <td>
                                    <div className="cart__info">
                                        <img src={item.image} alt={item.name + "__" + item.product + "__" + key} />
                                        <div>
                                            <p>{item.name}</p>
                                            {/* <small>Size : 40</small><br/> */}
                                            <a href="">Remove</a>
                                        </div>

                                    </div>
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                    {[...Array(item.stock).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                    </select>
                                </td>
                                <td>${item.price * item.qty}</td>
                            </tr>   
                            ))}
                            
                        </table>

                        <div class="cart__totalPrice">
                            <table>
                                <tr>
                            <td><b>Total</b> :</td>
                                    <td>${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</td>
                                </tr>
                                <div class="cart__btn">
                                    <button className="btn cart__checkout" disabled={cartItems.length === 0}>Checkout</button>

                                </div>
                                        
                                    
                            </table>
                        </div>
                    </div>
                }
            </section>
            
            <section>
                <Newsletter />
            </section>
            
            <Footer />
        </div>
    )
};

export default Cart;
