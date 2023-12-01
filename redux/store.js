// src/app/store.js
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';


// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

export default configureStore({
    reducer: rootReducer,
    middleware
});

sagaMiddleware.run(rootSaga);