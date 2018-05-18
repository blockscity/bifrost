"use strict";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers';
import sagas from '../sagas';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


const configureStore = async () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    let config = {
        key: 'bifrost',
        storage: storage,
        stateReconciler: autoMergeLevel2
    };

    let persistedReducer = persistReducer(config, rootReducer);

    const createAppStore = applyMiddleware(...middlewares)(createStore);

    let appStore = createAppStore(persistedReducer);
    await new Promise((resolve) => {
        persistStore(appStore, null, () => {
            resolve(appStore);
        })
    });

    sagaMiddleware.run(sagas);
    appStore.close = () => appStore.dispatch(END);
    return appStore;
};


export {configureStore}