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
        <div>
        <footer>
          Powered by <div><a href='https://www.themoviedb.org/documentation/api'>TMDb</a></div>
          <a href='https://github.com/inPhoenix'>inPhoenix</a>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
