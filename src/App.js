import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>

        <div style={{width:400, border: '1px solid grey'}}>
          <h1> Layout title </h1>
        </div>
      </Layout>
    );
  }
}

export default App;
