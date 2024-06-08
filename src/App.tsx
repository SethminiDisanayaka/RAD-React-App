import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {login} from "./view/pages/Login/login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*"
                           Component={DefaultLayout}>
                    </Route>
                    <Route path="/login"
                           Component={login}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;