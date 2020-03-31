import { createStore } from 'redux';
import UsuarioReducer from './UsuarioReducer';
import {persistReducer, persistStore} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'siteofertas',
    storage,
}

const persistedReducer = persistReducer(persistConfig, UsuarioReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };