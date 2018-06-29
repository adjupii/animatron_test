import {
  GET_NESTED_LIST_FETCHING,
  GET_NESTED_LIST_SUCCESS
} from './constants';

import { getCategories } from 'app/api/categories/api';

export const getNestedListData = () => (dispatch) => {
  dispatch({
    type: GET_NESTED_LIST_FETCHING,
    payload: true
  });

  return (
    getCategories()
      .then(data => {
        dispatch({
          type: GET_NESTED_LIST_FETCHING,
          payload: false
        });

        dispatch({
          type: GET_NESTED_LIST_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: GET_NESTED_LIST_FETCHING,
          payload: false
        });
      })
  );
};