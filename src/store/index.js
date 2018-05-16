"use strict";
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist'
import {AsyncStorage} from "react-native";
import rootReducer from '../reducers';
import sagas from '../sagas';


const configureStore = async () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    let config = {
        key: 'root',
        storage: AsyncStorage,
    };

    const persistedReducer = persistReducer(config, rootReducer);
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