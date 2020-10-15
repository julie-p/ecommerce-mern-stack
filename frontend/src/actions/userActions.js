import axios from 'axios';
import Cookie from 'js-cookie';
import { 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR
} from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/users/signin', { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfoSignin', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_ERROR, payload: error.message });
    };
};

const signup = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/users/signup', { email, password });
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
        Cookie.set('userInfoSignup', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNUP_ERROR, payload: error.message });
    };
};

export { 
    signin,
    signup
};