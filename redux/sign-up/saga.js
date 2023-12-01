import axios from 'axios';
import Cookies from 'js-cookie';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import Utils from '../../shared/utils/utils';
import actions from './action';
import Router from 'next/router';
import factories from './factory';

export function* submitSignUp() {
    yield takeEvery(actions.SUBMIT_SIGN_UP, function* (payload) {
        try {
            const { data } = payload;
            yield put({
                type: actions.SUBMIT_SIGN_UP,
            });
            const response = yield call(() => factories.requestSubmit(data));
            yield put({
                type: actions.SUBMIT_SIGN_UP_SUCCESS,
            });
        } catch (error) {
            yield put({ type: actions.SUBMIT_SIGN_UP_FAILURE, error });
        }
    });
}
export function* signUpStep () {
    yield takeEvery(actions.SIGN_UP, function* (payload) {
        const { data, success, error } = payload;
        try {
            const res = yield call(() => factories.requestSignUp(data));
            if (res?.data?.status == 200) {
                success && success()
                yield Router.push('/sign-in')
            } else {
                error && error()
                // yield put({ type: actions.SUBMIT_SIGN_UP_FAILURE, error: res?.data?.data?.email[0]});
                Utils.alertPopup(res?.data?.data?.email[0])
            }

        } catch (err) {
            if (err.message) {
            }
            // error && error()
        }
    });
}

export default function* rootSaga () {
    yield all([fork(submitSignUp), fork(signUpStep)]);
}
