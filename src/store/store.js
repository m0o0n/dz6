import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// export const rootReducer = combineReducers({ reducer });

export const store = configureStore({ reducer });

export const persistor = persistStore(store);
