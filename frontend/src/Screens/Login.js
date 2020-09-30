import React, { useState } from 'react';
import "../styles/Login.css";
import Login from '../Components/LoginInput';
import ReactCardFlip from 'react-card-flip';

function Signin() {

    const [ isFlipped, setIsFlipped ] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
            <div className="container__main__login">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <section className="login" id="signup">
                        <div className="login__container">
                            <h1>Welcome  !</h1>

                            <p>Create your account</p>

                            <Login />

                            <h6>Already one of us ?</h6>
                            <div>
                                <span onClick={handleClick} className="login__link link-underline">Login to your account</span>
                            </div>  
                        </div>
                    </section>

                    <section className="login" id="signin">
                        <div className="login__container">
                            <h1>Welcome Back !</h1>

                            <p>Login to your account</p>

                            <Login />                    

                            <h6>First time ?</h6>
                            <div>
                                <span onClick={handleClick}  className="login__link link-underline">Create your account</span>
                            </div>  
                        </div>
                    </section>
                </ReactCardFlip>
            </div>
        
    )
};

export default Signin;
