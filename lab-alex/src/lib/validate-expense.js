'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');

  if(isExpense) {
    try {
      const expense = action.payload;
      const notValidated = !expense.id || !expense.expenseName || !expense.expenseAmount || !expense.categoryID;
  
      if(notValidated) {
        throw new Error('VALIDATION ERROR: Expense must include id, expenseName, expenseAmount and categoryID');
      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    } 
  } else {
    return next(action);
  }
};

export default validateExpense;