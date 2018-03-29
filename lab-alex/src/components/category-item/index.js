'use strict';

import './_category-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseCreate as expenseActionCreate} from '../../action/expense-actions.js';
import {renderIf} from '../../lib/util.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDelete, categoryUpdate, expenses, expenseCreate} = this.props;
    category.budget = expenses[category.id].expenseAmount;
    return(
      <section className='category-item'>
        <div>
          <div className='content'>
            <h2>{category.title}</h2>
            <p>Total: ${category.budget}</p>
            <button className='remove' type='submit' onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
          <div className='expense-container'>
            <div className='add-expense'>
              <ExpenseForm
                buttonText='create expense'
                onComplete={expenseCreate}
                categoryID={category.id} />
            </div>
            {renderIf(expenses[category.id].length, <ExpenseItem expenses={expenses[category.id]} />)}
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
  };
};


export default connect(null, mapDispatchToProps) (CategoryItem);