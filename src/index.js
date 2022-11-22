import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {

  Navigation,
  Users,
  LogIn,
  SignUp,
  
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </Router>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
