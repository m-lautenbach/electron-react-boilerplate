import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import {figoSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(router, sagaMiddleware);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(figoSaga);
    return store;
}
