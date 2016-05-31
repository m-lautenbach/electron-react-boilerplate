import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import figoApi from './api/figo';

import 'regenerator-runtime/runtime';

function* fetchAccessToken(action) {
    try {
        ({client_id, client_secret, username, password} = action.payload);
        const token = yield call(
            figoApi.aquireAccessToken,
            client_id,
            client_secret,
            username,
            password
        );
        yield put({type: 'ACCESS_TOKEN_FETCH_SUCCEEDED', token: token});
    } catch (ex) {
        yield put({type: 'ACCESS_TOKEN_FETCH_FAILED', message: ex.message});
    }
};

function* figoSaga() {
    yield* takeEvery("ACCESS_TOKEN_FETCH_REQUESTED", fetchAccessToken);
};

export default {
    figoSaga
};
