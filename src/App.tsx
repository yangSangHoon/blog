import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from 'react-router-dom';
import Daily from './pages/daily/index';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/blog">
      <h1>양상훈의 블로그</h1>
      <Link to="/daily">일기</Link>
      <Route path={'/daily'} exact component={Daily} />
    </HashRouter>
  );
}

export default App;
