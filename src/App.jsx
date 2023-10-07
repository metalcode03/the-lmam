// import { useState } from 'react'
import { BrowserRouter, Routes, Route, redirect, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/authentication/Login';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
