import React from 'react';
import { Route } from 'react-router-dom';

// import logo from './assets/images/logoTrans.png';
import Layout from './hoc/Layout/Layout';
import InputPage from './container/InputPage/InputPage';

function App() {
  return (
    <div style={{width: "100%", height: '100%'}}>
      <Layout>
        <Route path="/" exact component={InputPage} />
      </Layout>
    </div>
  );
}

export default App;
