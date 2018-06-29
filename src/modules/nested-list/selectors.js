import { createSelector } from 'reselect';
import { createNestedList } from './helpers';

const getCategories = state => state.categories.data;

export const getNestedList = createSelector(
  getCategories,
  data => data ? createNestedList(data.content) : data
);
