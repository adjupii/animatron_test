import {
  GET_NESTED_LIST_FETCHING,
  GET_NESTED_LIST_SUCCESS
} from './constants';

const initialState = {
  fetching: false
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_NESTED_LIST_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };

    case GET_NESTED_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export default categories;