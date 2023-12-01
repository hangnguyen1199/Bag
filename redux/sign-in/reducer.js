import actions from './action';

const initState = {
    loading: false,
    status: null,
    error: '',
    submit: null,
};

const SignInReducer = (state = initState, action) => {
    switch (action.type) {
        // normal login
        case actions.SUBMIT_LOGIN:
            return {
                ...state,
                loading: true,
                submit: null,
            };
        case actions.SUBMIT_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                submit: true,
            };
        case actions.SUBMIT_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                status: action?.error?.status,
                submit: false,
            };
        case actions.RESET_FORM_LOGIN:
            return {
                ...state,
                loading: false,
                status: null,
                submit: null,
            };
        case actions.LOGIN_LOADING:
            return {
                ...state,
                loading: false,
                status: null,
                submit: null,
            };
        case actions.RESET_SIGN_IN:
            return {
                ...initState,
            };
        default:
            return {
                ...state,
            };
    }
};

export default SignInReducer;
