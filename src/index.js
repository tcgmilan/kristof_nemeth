import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';


import App from './App';




const Routing = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);
