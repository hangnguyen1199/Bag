import actions from './action';

const initState = {
    loading: false,
    status: null,
    errorElement: '',
    error: '',
    submit: null,
};

const SignUpReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SUBMIT_SIGN_UP:
            return {
                ...state,
                loading: true,
                submit: null,
            };
        case actions.SUBMIT_SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                status: 200,
                error: null,
                submit: true,
            };
        case actions.SUBMIT_SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                status: action.error.status,
                error: action.error,
                submit: false,
            };
        case actions.RESET_SIGN_UP:
            return {
                ...initState,
            };
        default:
            return {
                ...state,
            };
    }
};

export default SignUpReducer;
