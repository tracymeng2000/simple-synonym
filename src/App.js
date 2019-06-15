import React from 'react';
import { Route } from 'react-router-dom';

// import logo from './assets/images/logoTrans.png';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Editor from './container/Editor/Editor';
function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={Editor} />
      </Layout>
    </div>
  );
}

export default App;
