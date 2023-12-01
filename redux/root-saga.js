import { all } from 'redux-saga/effects';
import signIn from '../redux/sign-in/saga';
import signUp from '../redux/sign-up/saga';

export default function* rootSaga (getState) {
    yield all([
        signIn(),
        signUp(),
    ]);
}
