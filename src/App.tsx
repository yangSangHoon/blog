import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from 'react-router-dom';
import Daily from './pages/daily';
import Writing from './pages/writing';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';

const AppStyle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
function App() {
  return (
    <HashRouter basename="/blog">
      <AppStyle>
        <h1>양상훈의 블로그</h1>
        <Link to="/daily">일기</Link>
        <Link to="/writing">낙서</Link>
      </AppStyle>

      <Route path={'/daily'} exact component={Daily} />
      <Route path={'/writing'} exact component={Writing} />
    </HashRouter>
  );
}

export default App;
