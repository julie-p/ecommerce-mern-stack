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
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_ERROR:
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
};

function userSignupReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true };
        case USER_SIGNUP_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNUP_ERROR:
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
};

export { 
    userSigninReducer,
    userSignupReducer
};