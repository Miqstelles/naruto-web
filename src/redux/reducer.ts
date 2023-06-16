import { Reducer } from 'redux';

interface FilterState {
    filteredItems: string[];
    pageNumbers: number;
}

const initialState: FilterState = {
    filteredItems: [],
    pageNumbers: 0,
};

export const filtersReducer: Reducer<FilterState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'SET_FILTERED_ITEMS':
            return {
                ...state,
                filteredItems: action.payload,
            };
        case 'SET_PAGE_NUMBERS':
            return {
                ...state,
                pageNumbers: action.payload,
            };
        default:
            return state;
    }
};