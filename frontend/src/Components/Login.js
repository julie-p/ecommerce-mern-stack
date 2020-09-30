import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Login() {
    return (
        <div className="login__txtb">
            <div>
                <input 
                    className="login__input"
                    name="email"
                    autoComplete="off"
                    required
                /> 
                <label for="email" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>

            <div>
                <input 
                    className="login__input"
                    name="password" 
                    type="password" 
                    autoComplete="off" 
                    required/>
                <label for="password" className="label-name">
                    <span className="content-name">
                        Password
                    </span>
                </label>
            </div>

            <button type="button">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
};

export default Login;
