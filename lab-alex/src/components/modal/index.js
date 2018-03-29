'use strict';

import React from 'react';
import './_modal.scss';
export default class Modal extends React.component {
  render() {
    return(
      <section className='modal'>
        <button onClick={this.props.close}>X</button>
        <main>
          {this.props.children}
        </main>
      </section>
    );
  }
}

 