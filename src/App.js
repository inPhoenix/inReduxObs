import React, { Component } from 'react';
import './App.css';
import Stories from './components/Stories/Stories'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stories />
      </div>
    );
  }
}

export default App;
