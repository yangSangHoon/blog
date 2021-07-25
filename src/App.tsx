import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import Daily from './pages/daily/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>양상훈의 블로그</h1>
      <a href="/blog/daily">일기</a>
      <Route path={'/blog/daily'} exact component={Daily} />
    </BrowserRouter>
  );
}

export default App;
