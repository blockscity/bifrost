"use strict";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import {persistReducer, persistStore, getStoredState} from 'redux-persist'
import {AsyncStorage} from 'react-native';
import rootReducer from '../reducers';
import sagas from '../sagas';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


const configureStore = async () => {

    let config = {
        key: 'root',
        storage: AsyncStorage,
        debug: true,
        timeout: 10000,
        stateReconciler: autoMergeLevel2
    };

    let storedState = await getStoredState(config);

    const sagaMiddleware = createSagaMiddleware();
    var middlewares = [sagaMiddleware];

    let persistedReducer = persistReducer(config, rootReducer);

    let store = createStore(persistedReducer, storedState, applyMiddleware(...middlewares));

    persistStore(store);

    sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);
    return store;
};


export {configureStore}