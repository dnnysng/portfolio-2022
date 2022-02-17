import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import style from './App.module.css'

import Header from './components/header/Header'
import Home from './pages/home'
import Work from './pages/work'
import Contact from './pages/contact'

function App() {

  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const darkCheck = (isDarkTheme) => {
    setIsDark(isDarkTheme)
  }

  const menuCheck = (isMenuOpen) => {
    setIsMenuOpen(isMenuOpen)
  }

  return (
    <div className={isDark ? style.lightTheme : style.darkTheme}>
      <Header callback={{ darkCheck, menuCheck }} dark={isDark} menu={isMenuOpen} />
      <Routes>
        <Route path="/" element={<Home menu={isMenuOpen} dark={isDark} />} />
        <Route path="/work" element={<Work dark={isDark} />} />
        <Route path="/contact" element={<Contact dark={isDark} />} />
      </Routes>
    </div>
  );
}

export default App;