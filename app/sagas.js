import 'regenerator-runtime/runtime';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import figoApi from './api/figo';
import {startSession} from './actions/user'

function* fetchAccessToken(action) {
    try {
        var client_id, client_secret, username, password;
        ({client_id, client_secret, username, password} = action.payload);
        const token = yield figoApi.aquireAccessToken(client_id, client_secret, username, password);
        yield put(startSession(token.access_token));
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
