// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// ---------- PAGES ----------
import HomePage from './pages/HomePage/HomePage';
// ---------- STYLES ----------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />;
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
