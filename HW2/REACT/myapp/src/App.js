import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {

  render() {
    return (
<body>
     
      <div className="container">
        <h1 className="text-center">ToDo List</h1>
        <Todos />
      </div>
</body>
    );
  }
}

export default App;