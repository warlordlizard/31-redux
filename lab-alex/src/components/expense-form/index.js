'use strict';

import React from 'react';
import './_expense-form.scss';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense ? {...props.expense} : { expenseName: '', expenseAmount: '', categoryID: props.categoryID };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    if (!this.props.expense) {
      this.setState({ expenseName: '', expenseAmount: ''});
    }
  }

  componentWillReceiveProps(props) {
    if (props.expense) {
      this.setState({...props.expense});
    }
    if(props.categoryID) {
      this.setState({categoryID : props.categoryID});
    }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='expenseName'
          type='text'
          placeholder='expense name...'
          value={this.state.expenseName}
          onChange={this.handleChange} />
        <input
          name='expenseAmount'
          type='number'
          placeholder='$ expense amount'
          value={this.state.expenseAmount}
          onChange={this.handleChange} />
        <button className='form-button icon-home3' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;