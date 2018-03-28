'use strict';

import './_category-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import { expenseCreate as expenseActionCreate } from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDelete, categoryUpdate, expense, expenseCreate} = this.props;
    return(
      <section className='category-item'>
        <div>
          <div className='content'>
            <h3>{category.title}</h3>
            <button className='remove' type='submit' onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
          </div>
          <div className='expense-form'>
            <ExpenseForm
              buttonText='create expense'
              expense={expense}
              onComplete={expenseCreate}
              categoryID= {expense} />
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