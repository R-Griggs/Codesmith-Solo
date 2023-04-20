import React, { Component } from 'react';

import StackFrame from './StackFrame';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

    // send a request to the server to query all rows of type function from database 
    const getFunctions = async function() {
      const result = await fetch('/functions');
      console.log('functions received in stack componentDidMount: ', result);
    }
    const functions = getFunctions();
    this.setState({functions: functions});

  }

  render() {

    return(
      <div className='stack'>
        <StackFrame name='GLOBAL ()' />
        <StackFrame name='FUNCTION 1 ()' />
        <StackFrame name='FUNCTION 2 ()' />
        <StackFrame name='FUNCTION 3 ()' />
        <StackFrame name='FUNCTION 4 ()' />
      </div>
    )
  }
}

export default Stack;