import Router from 'next/router';
import { all, fork, put, takeEvery,call } from 'redux-saga/effects';
import Action from './action';
import Factories from './factory';
import Cookies from 'js-cookie';
import AppConfig from '../../shared/config/AppConfig';
import actionApp from '../app/action';

export function* getSignIn() {
    yield takeEvery(Action.SUBMIT_LOGIN, function* (payload) {
        const { data } = payload;
        try {
            yield put({ type: actionApp.SHOW_LOADING})
            const response = yield call(() => Factories.getSignIn(data));
            // yield put({
            //     type: Action.SUBMIT_LOGIN_SUCCESS,
            //     payload: [response.data],
            // });
            if(response.data?.status == 200){
                Cookies.set('token',response.data?.data?.access_token);
                AppConfig.ACCESS_TOKEN=response.data?.data?.access_token;
                Router.push('/')
                yield put({
                    type: Action.SUBMIT_LOGIN_SUCCESS,
                    payload: [response.data],
                });
                if (payload?.callback?.success) {
                    payload.callback.success(response);
                }
            } else {
                payload?.callback?.error && payload?.callback?.error(response.data.MsgNo)
            }

            yield put({ type: actionApp.CLOSE_LOADING})
        } catch (error) {
        }

    });
}
function* getLogout(){
    yield takeEvery(Action.LOGOUT_SUBMIT,function* (payload){
        const { data, success, error } = payload;
        try {
            const response=yield call(()=>Factories.getLogout())
            if(response.data?.status == 200){
                yield Cookies.remove('token');
                yield Router.push('/sign-in')
                if (payload.callback) {
                    payload.callback(response);
                }
            }

        } catch (error) {
            
        }
    })
}
export default function* rootSaga() {
    yield all([
        fork(getSignIn),
        fork(getLogout)
    ]);
}
