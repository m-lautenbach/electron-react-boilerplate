import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import {figoSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(router, logger, sagaMiddleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(figoSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
