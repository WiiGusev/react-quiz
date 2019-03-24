import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './conteiners/Quiz/Quiz';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz/>
      </Layout>
    );
  }
}

export default App;
