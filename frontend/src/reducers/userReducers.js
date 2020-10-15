import { 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_ERROR,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR
} from '../constants/userConstants';

function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfoSignin: action.payload };
        case USER_SIGNIN_ERROR:
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
};

function userSignupReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loader: true };
        case USER_SIGNUP_SUCCESS:
            return { loader: false, userInfoSignup: action.payload };
        case USER_SIGNUP_ERROR:
            return { loader: false, err: action.payload };
        default: 
            return state;
    }
};

export { 
    userSigninReducer,
    userSignupReducer
};