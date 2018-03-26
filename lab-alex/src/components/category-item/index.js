'use strict';

import React from 'react';

class CategoryItem extends React.Component {
  render() {
    return(
      <div key={this.props.item.id}>
        <h3>{this.props.item.title}</h3>
      </div>
    )
  }
}

export default CategoryItem;