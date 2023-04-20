import React, { Component } from 'react';
//components
import Stack from './Stack';
import Task from './Task';
import MicroTask from './MicroTask';

const initialState = {
  
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
    const parseJS = function() {
      //parse through code
      //identify functions
      //every time a function is found, populate a newRow object
      //make a server request to pass newRow to database

      // database columns: id, lineNumber, name, type, parent, value 
      const newRow = { id: 0, line: 0, name: "global", type: "function", parent: 99, value: "global" };
    
      const postRequest = async function(newRow, url='/parser') {
        
        const response = await fetch(url, {
          method: 'POST',
          headers: new Headers({ "Content-Type": "application/json"}),
          body: newRow
          }
        )
        console.log(response.json());
      };

      postResquest(newRow);
    }
  }

  render() {
    return(
      <div className='app'>

        <div id='stackTitle' class="title">CALL STACK</div>

        <Stack />

        <div id="selectFileTitle" class="title">SELECT JAVASCRIPT FILE</div>

        <div id='selectFileContainer' className='container'>
          <button id="selectFileBtn" class="btn" >Select File</button>
        </div>

        <div id="runBtnTitle" class="title">RUN VISUALIZER</div>

        <div id='runContainer' className='container'>
          <button id="runBtn" class="btn" >Run</button>
        </div>

        <div id="exConTitle" className='title'>EXECUTION CONTEXT</div>

        <div id="executionContext">
          <div id="code"></div>
        </div>

        <div id="microTaskTitle" className='title'>MICROTASK QUEUE</div>

        <div id="microTaskQueue" class="queue">
          <MicroTask />
          <MicroTask />
          <MicroTask />
        </div>

        <div id="taskTitle" className='title'>TASK QUEUE</div>
        <div id="taskQueue" class="queue">
          <Task />
          <Task />
          <Task />
        </div>

      </div>
    )
  };
}

export default App;