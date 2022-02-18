import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// contains theme color variables
import style from './App.module.css'

// pages
import Header from './components/header/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {

  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // callback to get theme state from header
  const darkCheck = (isDarkTheme) => {
    setIsDark(isDarkTheme)
  }

  // callback to get menu state from header
  const menuCheck = (isMenuOpen) => {
    setIsMenuOpen(isMenuOpen)
  }


  return (
    <div className={`
      ${style.wrapper}
      ${isDark ? style.darkTheme : style.lightTheme}
    `}>
      <Header callback={{ darkCheck, menuCheck }} dark={isDark} menu={isMenuOpen} />
      <Routes>
        {/* if adding pages make sure to provide dark prop to handle theme switch */}
        <Route path="/" element={<Home menu={isMenuOpen} dark={isDark} />} />
        <Route path="/work" element={<Work dark={isDark} />} />
        <Route path="/contact" element={<Contact dark={isDark} />} />
      </Routes>
    </div>
  );
}

export default App;