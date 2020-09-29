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
                cartItems === 0 ?
                <h1>Your cart is empty</h1>
                :
                <div>
                    <h1>My Cart</h1>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>

                            {
                            cartItems.map(item => (
                            <tr>
                                <td>
                                    <div className="cart__info">
                                        <img src={item.image} alt='' />
                                        <div>
                                            <p>{item.name}</p>
                                            {/* <small>Size : 40</small><br/> */}
                                            <a href="">Remove</a>
                                        </div>

                                    </div>
                                </td>
                                <td><input type="number" value={item.qty}/></td>
                                <td>${item.price}</td>
                                <td>${item.price * item.qty}</td>
                            </tr>   
                            ))}
                            
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
