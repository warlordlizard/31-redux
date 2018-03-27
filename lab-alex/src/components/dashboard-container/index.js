'use strict';

import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {categoryCreate as categoryActionCreate} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ title: 'groceries' });
    this.props.categoryCreate({ title: 'car' });
  }
  render() {
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
            onComplete={this.props.categoryCreate} />
          {this.props.categories.map (item => 
            <CategoryItem category={item} key={item.id} />
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
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);