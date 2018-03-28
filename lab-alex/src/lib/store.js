'use strict';

import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index.js';
import reporter from './redux-reducer.js';
import validateCategory from './validate-category.js';
import validateExpense from './validate-expense.js';

export default () => createStore(reducer, applyMiddleware(reporter, validateCategory, validateExpense));