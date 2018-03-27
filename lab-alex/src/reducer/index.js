'use strict';

import {combineReducers} from 'redux';
import expenseReducer from './expenses.js';
import categoriesReducer from './category.js';

export default combineReducers({
  expenses: expenseReducer,
  categories: categoriesReducer,
});