import React, { Component }from 'react';

class StackFrame extends Component {

  render() {
    return (
    <div className='stackFrame'>{this.props.name}</div>
    );
  }
}

export default StackFrame;