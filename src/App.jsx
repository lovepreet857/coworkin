import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Header from './components/common/Header';
import Footet from './components/common/Footet';
import Home from './pages/Home';
import Create from './pages/Create_Account';
import Login from './pages/Login';
import Forgorpass from './pages/Forgorpass';
import Creatpass from './pages/Creatpass';
import Browse from './pages/Browse';
import Detail_Page from './pages/Detail_Page';
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
      <Route path='/creatpass' element={<Creatpass/>} />
      <Route path='/browse' element={<Browse/>} />
      <Route path='/detail' element={<Detail_Page/>} />




      </Routes>
      <Footet/>
      </BrowserRouter>
    </>
  );
}

export default App;
