'use strict';

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    const {expenses, expenseDelete, expenseUpdate} =this.props;
    return (
      <ul className='expense-list'>
        {expenses.map(expense => 
          <li className='expense-item' key={expense}>
            <p>{expense.expenseName}</p>
            <p>{expense.expenseAmount}</p>
            <button type="submit" onClick={() => expenseDelete(expense)}>X</button>
            <ExpenseForm
              expense={expense}
              buttonText='update'
              onComplete={expenseUpdate} />
          </li>
        )}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
});

export default connect(null ,mapDispatchToProps)(ExpenseItem);