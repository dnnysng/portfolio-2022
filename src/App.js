import { useState, useEffect } from 'react'

import LoadSpinner from './components/loadSpinner/LoadSpinner'

import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

import style from './App.module.css'

export default function App() {

  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // get local preference for theme
  useEffect(() => {
    const rawData = localStorage.getItem("isDark");
    if (rawData) setIsDark(JSON.parse(rawData))
  }, [])

  // set local preference for theme on theme change
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark))
  }, [isDark])

  // time for loader animation to run
  setTimeout(() => {
    setLoading(false);
  }, 4000)

  return (
    <div className={`${style.container} ${isDark ? "dark" : "light"}`}>
      {loading && <LoadSpinner />}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Home menu={isMenuOpen} />
      <Footer />
    </div>
  );
}
