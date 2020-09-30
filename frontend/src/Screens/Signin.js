import React from 'react';
import "../styles/Login.css";
import Login from '../Components/Login';
import { Link } from 'react-router-dom';


function Signin() {
    return (
        <div className="container__main__login">
            <section className="login">
                <div className="login__container">
                    <h1>Welcome Back !</h1>

                    <p>Login to your account</p>

                    <Login />                    

                    <h6>First time ?</h6>
                    <div>
                    <Link to="/create-your-account" className="login__link link-underline">Create your account</Link>
                </div>  
                </div>
            </section>
        </div>
    )
};

export default Signin;
