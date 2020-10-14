import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import "../styles/Login.css";
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login(props) {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ passwordShow, setPasswordShow ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        };
        return () => {
            //
        }
    }, [userInfo]);

    const handleSubmitSignin = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    const handleSubmitSignup = (e) => {

    };

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

                        <form 
                            className="login__txtb"
                            onSubmit={handleSubmitSignup}
                        >
                            <div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    required
                                /> 
                                <label htmlFor="email" className="label-name">
                                    <span className="content-name">Email</span>
                                </label>
                            </div>

                            <div>
                                <div className="password-icon">
                                    <FontAwesomeIcon 
                                        icon={passwordShow ? faEyeSlash : faEye} 
                                        onClick={() => setPasswordShow(passwordShow => !passwordShow)} 
                                    />
                                </div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={passwordShow ? "text" : "password"}
                                    name="password"
                                    autoComplete="off"
                                    required
                                />
                                <label htmlFor="password" className="label-name">
                                    <span className="content-name">
                                        Password
                                    </span>
                                </label>
                            </div>

                            <button type="submit">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>

                        <h6>Already one of us ?</h6>
                        <div>
                            <Link onClick={handleClick} className="login__link link-underline">Login to your account</Link>
                        </div>  
                    </div>
                </section>

                <section className="login" id="signin">
                    <div className="login__container">
                        <h1>Welcome Back !</h1>

                        <p>Login to your account</p>

                        <div>
                            {loading && <div>Loading...</div>}
                            {error && <div className="login__error">{error}</div>}
                        </div>

                        <form 
                            className="login__txtb"
                            onSubmit={handleSubmitSignin}
                        >
                            <div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    required
                                /> 
                                <label htmlFor="email" className="label-name">
                                    <span className="content-name">Email</span>
                                </label>
                            </div>

                            <div>
                                <div className="password-icon">
                                    <FontAwesomeIcon 
                                        icon={passwordShow ? faEyeSlash : faEye} 
                                        onClick={() => setPasswordShow(passwordShow => !passwordShow)} 
                                    />
                                </div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={passwordShow ? "text" : "password"}
                                    name="password"
                                    autoComplete="off"
                                    required
                                />
                                <label htmlFor="password" className="label-name">
                                    <span className="content-name">
                                        Password
                                    </span>
                                </label>
                            </div>

                            <button type="submit">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>                    

                        <h6>First time ?</h6>
                        <div>
                            <Link onClick={handleClick}  className="login__link">Create your account</Link>
                        </div>  
                    </div>
                </section>
            </ReactCardFlip>
        </div>
        
    )
};

export default Login;
