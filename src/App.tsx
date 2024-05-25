import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {NavBar} from './view/Navbar/NavBar';
import {findAllByDisplayValue} from "@testing-library/react";
import { MainContent } from './view/MainContent/MainContent';

function App() {
  return (
      <div>
     <NavBar></NavBar>
     <MainContent></MainContent>
      </div>
  );
}

export default App;