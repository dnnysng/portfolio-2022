import { AnimatePresence } from 'framer-motion';

import MobileMenu from './mobile-menu/MobileMenu';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';

import style from './Header.module.css';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    // menu toggle
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={style.block}>
            <div className={style.container}>
                <div className={style.logoWrapper}>
                    <a href="#hero">
                        <h3 className={style.logo}>Danny Seng</h3>
                    </a>
                </div>
                <nav className={style.nav}>
                    <a className={style.link} href="#work">
                        Work
                    </a>
                    <a className={style.link} href="#latestUpdates">
                        Articles
                    </a>
                    <a className={style.link} href="#contact">
                        Contact
                    </a>
                </nav>
                <AnimatePresence>
                    {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
                </AnimatePresence>
                <Hamburger className={style.hamburger} onClick={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
