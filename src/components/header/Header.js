import { AnimatePresence } from 'framer-motion'

import MobileMenu from './mobile-menu/MobileMenu'
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import { ReactComponent as Sun } from '../../assets/icons/sun-shape.svg'

import style from './Header.module.css'

const Header = ({ isMenuOpen, setIsMenuOpen, isDark, setIsDark }) => {

    // menu toggle
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={style.block}>
            <div className={style.container}>
                <div className={style.logoWrapper}>
                    <a href="#hero"><h3 className={style.logo}>Danny Seng</h3></a>
                </div>
                <nav className={style.nav}>
                    <a className={style.link} href='#hero'>Home</a>
                    <a className={style.link} href='#work'>Work</a>
                    <a className={style.link} href='#latestUpdates'>Blog</a>
                    <a className={style.link} href='#contact'>Contact</a>
                </nav>
                <Sun className={style.sun} onClick={() => setIsDark(!isDark)} />
                <AnimatePresence>
                    {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
                </AnimatePresence>
                <Hamburger className={style.hamburger} onClick={toggleMenu} />
            </div>
        </header>
    )
}

export default Header