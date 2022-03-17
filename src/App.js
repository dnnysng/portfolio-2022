import { useState } from 'react'
import LoadSpinner from './components/loadSpinner/LoadSpinner'
import { motion } from "framer-motion"


// contains theme color variables
import style from './App.module.css'

// pages
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

function App() {

  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // callback to get theme state from header
  const darkCheck = (isDarkTheme) => {
    setIsDark(isDarkTheme)
  }

  // callback to get menu state from header
  const menuCheck = (isMenuOpen) => {
    setIsMenuOpen(isMenuOpen)
  }

  setTimeout(() => {
    setLoading(false);
  }, 3000)

  const variants = {
    vis: { opacity: 1 },
    invis: { opacity: 0, "z-index": -1 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  }

  return (
    <div className={`
      ${style.wrapper}
      ${isDark ? style.darkTheme : style.lightTheme}
    `}>
      <motion.div className={`${style.loaderWrapper}`} animate={loading ? "vis" : "invis"} variants={variants}>
        <LoadSpinner isDark={isDark} />
      </motion.div>
      <motion.div className={style.contentWrapper} animate={loading ? "out" : "in"} variants={variants}>
        <Header callback={{ darkCheck, menuCheck }} dark={isDark} menu={isMenuOpen} />
        <Home menu={isMenuOpen} dark={isDark} />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;