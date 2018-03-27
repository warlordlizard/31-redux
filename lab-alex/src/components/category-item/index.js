'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryDelete, categoryUpdate} = this.props;
    return(
      <section className='category-item'>
        <div>
          <div className='content'>
            <h3>{category.title}</h3>
            <button type='submit' onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='edit'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate} />
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
  };
};


export default connect(null, mapDispatchToProps) (CategoryItem);