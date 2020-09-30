import React from 'react';
import "../styles/Login.css";
import Login from '../Components/Login';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="container__main__login">
            <section className="login">
                <div className="login__container">
                    <h1>Welcome  !</h1>

                    <p>Create your account</p>

                    <Login />

                    <h6>Already one of us ?</h6>
                    <div>
                    <Link to="/login" className="login__link link-underline">Login to your account</Link>
                </div>  
                </div>
            </section>
        </div>
    )
};

export default Signup;
