import {thunk} from 'redux-thunk';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import CombinedReducer from './reducer/index.js';

const store = configureStore({
    reducer: CombinedReducer,
    middleware: () => new Tuple(thunk),
});

export default store;
