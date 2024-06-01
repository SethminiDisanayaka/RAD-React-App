import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {NavBar} from './view/common/Navbar/NavBar';
import {findAllByDisplayValue} from "@testing-library/react";
import { MainContent } from './view/common/MainContent/MainContent';
import { Footer } from './view/common/Footer/Footer';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {login} from "./view/pages/login";

function App() {
  return (
      <div>
        <BrowserRouter>
         <Routes>
             <Route path="" Component={DefaultLayout}>

             </Route>
             <Route path="" Component={login}>

             </Route>
         </Routes>
     </BrowserRouter>
     
      </div>
  );
}

export default App;