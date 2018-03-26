'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({ title: 'Groceries' });
  }
  render() {
    return(
      <main className='dashboard-container'>
        <h2>Budget Tracker</h2>

        <CategoryForm
          buttonText='create a category'
          onComplete={this.props.categoryCreate} />
        {this.props.categories.map (item => 
          <CategoryItem item={item} key={item.id} />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);