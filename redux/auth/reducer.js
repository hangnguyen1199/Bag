import actionAuth from './action';

const initState = {
    User:[]
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case actionAuth.GET_USER_SUCCESS:
            return {
                ...state,
                User: action.payload?.user,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AuthReducer;
