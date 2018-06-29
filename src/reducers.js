import { combineReducers } from 'redux';

import categories from 'app/modules/nested-list/reducers';

const rootReducer = combineReducers({
  categories
});

export default rootReducer;