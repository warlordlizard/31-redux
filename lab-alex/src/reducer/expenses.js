'use strict';

let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CATEGORY_CREATE': 
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_DELETE':
      return { ...state, [payload.id]: undefined };
    case 'EXPENSE_CREATE':
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      return { ...state, [categoryID]: [...categoryExpenses, payload] };
    case 'EXPENSE_UPDATE':
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense )};
    case 'EXPENSE_DELETE':
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      return {
        ...state,
        [categoryID]: categoryExpenses.filter(expense => expense.id !== payload.id)};
    default:
      return state;
  }
};