import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  loadData(){
    debugger;
    axios.get("http://localhost:61735/api/GetCoursesInfoList/2")
    .then((response) =>{
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.loadData}>loadData</button>
        </header>
      </div>
    );
  }
}

export default App;
