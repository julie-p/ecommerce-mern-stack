import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin, signup } from '../actions/userActions';
import "../styles/Login.css";
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'reactstrap';

function Login(props) {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ passwordShow, setPasswordShow ] = useState(false);
    const [ emailSignin, setEmailSignin ] = useState('');
    const [ emailSignup, setEmailSignup ] = useState('');
    const [ passwordSignin, setPasswordSignin ] = useState('');
    const [ passwordSignup, setPasswordSignup ] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const userSignup = useSelector(state => state.userSignup);
    const { loading, userInfoSignin, error } = userSignin;
    const { loader, userInfoSignup, err } = userSignup;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfoSignin) {
            props.history.push('/');
        };
        if (userInfoSignup) {
            props.history.push('/');
        }
    }, [userInfoSignin, userInfoSignup]);

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        dispatch(signup(emailSignup, passwordSignup));
    };

    const handleSubmitSignin = (e) => {
        e.preventDefault();
        dispatch(signin(emailSignin, passwordSignin));
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

                        <div>
                            {loader && <Spinner type="grow" className="spinner login" />}
                            {err && <div className="login__error">{err}</div>}
                        </div>

                        <form 
                            className="login__txtb"
                            onSubmit={handleSubmitSignup}
                        >
                            <div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setEmailSignup(e.target.value)}
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
                                    onChange={(e) => setPasswordSignup(e.target.value)}
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
                            {loading && <Spinner type="grow" className="spinner" />}
                            {error && <div className="login__error">{error}</div>}
                        </div>

                        <form 
                            className="login__txtb"
                            onSubmit={handleSubmitSignin}
                        >
                            <div>
                                <input 
                                    className="login__input"
                                    onChange={(e) => setEmailSignin(e.target.value)}
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
                                    onChange={(e) => setPasswordSignin(e.target.value)}
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
