import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, } from './reducer';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
});