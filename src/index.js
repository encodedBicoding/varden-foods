import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  root
)
