import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Header from './components/common/Header';
import Footet from './components/common/Footet';
import Home from './pages/Home';
import Create from './pages/Create_Account';
import Login from './pages/Login';
import Forgorpass from './pages/Forgorpass';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/createaccount' element={<Create/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotpass' element={<Forgorpass/>} />


      </Routes>
      <Footet/>
      </BrowserRouter>
    </>
  );
}

export default App;
