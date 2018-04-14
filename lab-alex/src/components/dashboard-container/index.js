'use strict';

import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {categoryCreate as categoryActionCreate} from '../../action/category-actions.js';
import {expenseCreate as expenseActionCreate} from '../../action/expense-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
// import Modal from '../modal';

class DashboardContainer extends React.Component {
  componentDidMount() {
    // this.props.categoryCreate({ title: 'groceries', budget: 400 });
    // this.props.categoryCreate({ title: 'car', budget: categotyExpenses.budget  });
  }
  render() {
    // let categoryTotal = this.props.expenses
    // // .map( expense  => expense.budget)
    // console.log (categoryTotal)
    return(
      <main className='dashboard'>
        <header>
          <h3>expense tracker</h3>
          <nav>
            <ul>
              <li><Link to='/'>dashboard</Link></li>
            </ul>
          </nav>
        </header>
        <section className='lower'>
          <h2>create a new category</h2>
          <CategoryForm
            buttonText='create category'
            onComplete={this.props.categoryCreate} 
            className='createCat'/>
          {this.props.categories.map (item => 
            <CategoryItem category={item} key={item.id} expenses={this.props.expenses} onComplete={this.props.expenseActionCreate}/>
          )}
        </section>
        <footer></footer>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);