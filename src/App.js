import { useState } from 'react'

// contains theme color variables
import style from './App.module.css'

// pages
import Header from './components/header/Header'
import Home from './pages/Home'

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
      <Home menu={isMenuOpen} dark={isDark} />
    </div>
  );
}

export default App;