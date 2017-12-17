import React, { Component } from 'react';
import Input from '../containers/input';
import Output from '../containers/output';
import '../styles/main.scss';

class App extends Component {

  render() {
    return (
      <div className="main">
          <h1>Hello, Redux</h1>
        <Input/>
        <Output/>
      </div>
    );
  }
}

export default App;
