import React from 'react';
import styled from "styled-components";
import './App.css';
import RouteApp from './Route'
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .main {
    display: flex;
    flex: 1 0 auto;
  }
  background-color: azure;
`;

function App() {
  return (
    <Content>
      <div className="main">
        <RouteApp />
      </div>
    </Content>
  );
}

export default App;
