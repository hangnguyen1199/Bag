
import { combineReducers } from 'redux';
import SignIn from '../redux/sign-in/reducer'
import SignUp from '../redux/sign-up/reducer'

const rootReducer = combineReducers({
    SignIn,
    SignUp,
});

export default rootReducer;
