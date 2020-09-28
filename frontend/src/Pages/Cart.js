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
    const size = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    console.log(productId, size);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, size))
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
                    { 
                        cartItems.length === 0 ?
                        <div>Your cart is empty</div>
                        :
                        cartItems.map(item => 
                        <div>
                            <td>
                                <div className="cart__info">
                                    <img src={item.image} alt='product' />
                                    <div>
                                        <p>{item.name}</p>
                                        <small>Size : {item.size}</small><br/>
                                        <a href="">Remove</a>
                                    </div>

                                </div>
                            </td>
                            <td><input type="number" value=""/></td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                        </div>
                        )
                    }
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
