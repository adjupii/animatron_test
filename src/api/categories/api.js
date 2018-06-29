import axios from 'axios';

import { GET_CATEGORIES_URL } from './constants';

export const getCategories = () => (
  axios.get(GET_CATEGORIES_URL).then(response => response.data)
);