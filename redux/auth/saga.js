import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import actions from './action';
import Factories from './factory.';


export function* getUser() {
    yield takeEvery(actions.GET_USER, function* (payload) {
        const { data } = payload;
        try {
            let response = yield call(() => Factories.getUserProfile());
            // console.log(response?.data?.data);
            yield put({
                type: actions.GET_USER_SUCCESS,
                payload: response?.data?.data,
            });
            payload?.callback && payload?.callback(response.data)
        } catch (error) {
           
        }
    });
}



export default function* rootSaga() {
    yield all([
        fork(getUser)
    ]);
}
