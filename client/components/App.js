import React, { Component } from 'react';
//components
import Stack from './Stack';
import Task from './Task';
import MicroTask from './MicroTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: ''
    }
  }

  componentDidMount() {
    
    console.log('state from componentDidMount: ', this.state);
  
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
    console.log('APP rendered');
    let fileContent = '';

    async function writeFile() {
      const content = document.getElementById("fileContent");
      const [file] = document.querySelector("input[type=file]").files;
      const reader = new FileReader();
    
      reader.addEventListener(
        "load",
        () => {
          // this will then display a text file
          content.innerText = file.name;
          fileContent = reader.result;
          console.log('fileContent read: \n', fileContent);
        },
        false
      );
    
      if (file) {
        await reader.readAsText(file);
      }
    };

    if(this.state.fileContent !== fileContent) {
      this.setState({fileContent: fileContent});
      console.log('state as seen from inside render(): ', this.state);
    };
    

    return(
      <div className='app'>

        <div id='stackTitle' className="title">CALL STACK</div>

        <Stack />

        <div id="selectFileTitle" className="title">SELECT JAVASCRIPT FILE</div>

        <div id='selectFileContainer' className='container'>
          <input type="file" onChange={writeFile} /><br />
          <p id="fileContent">No file chosen</p>
        </div>

        <div id="runBtnTitle" className="title">RUN VISUALIZER</div>

        <div id='runContainer' className='container'>
          <button id="runBtn" className="btn" >Run</button>
        </div>

        <div id="exConTitle" className='title'>EXECUTION CONTEXT</div>

        <div id="executionContext">
          <div id="code"></div>
        </div>

        <div id="microTaskTitle" className='title'>MICROTASK QUEUE</div>

        <div id="microTaskQueue" className="queue">
          <MicroTask />
          <MicroTask />
          <MicroTask />
        </div>

        <div id="taskTitle" className='title'>TASK QUEUE</div>
        <div id="taskQueue" className="queue">
          <Task />
          <Task />
          <Task />
        </div>

      </div>
    )
  };
}

export default App;