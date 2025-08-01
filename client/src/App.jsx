// ---------- FXNALITY ----------
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ---------- COMPONENTS ----------
import Header from './components/Header/Header';
// ---------- PAGES ----------
import HomePage from './pages/HomePage/HomePage';
// ---------- STYLES ----------
import './App.scss';
import './styles/global.scss';

function App() {
  // HAMBURGER MENU OPTIONS PANEL
  const [isPageMenuVisible, setIsPageMenuVisible] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header
          isPageMenuVisible={isPageMenuVisible}
          setIsPageMenuVisible={setIsPageMenuVisible}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />;
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
