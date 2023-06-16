import { PayloadAction } from '@reduxjs/toolkit';

export const setFilteredItem = (filteredItems: string[]): PayloadAction<string[]> => ({
  type: 'SET_FILTERED_ITEMS',
  payload: filteredItems,
});

export const setPageNumber = (pageNumbers: number): PayloadAction<number> => ({
  type: 'SET_PAGE_NUMBERS',
  payload: pageNumbers,
});