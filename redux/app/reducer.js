import actionApp from "./action";


const initState = {
    loading: false,
};
const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case actionApp.SHOW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionApp.CALL_LOADING:
            return {
                ...state,
                loading: true,
            };
        case actionApp.CLOSE_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;