import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import hamburger from '../../assets/icons/hamburger.svg'

const Header = () => {
    const [menuClosed, setMenuClosed] = useState(true)

    const toggleMenu = () => {
        if (menuClosed) {
            document.querySelector('nav').style.display = 'flex';
        } else {
            document.querySelector('nav').style.display = 'none';
        }
        setMenuClosed(!menuClosed)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <h3 className={styles.logo}>Danny Seng</h3>
                <nav className={styles.nav}>
                    <Link className={styles.navLink} to='/'>Home</Link>
                    <Link className={styles.navLink} to='/work'>Work</Link>
                    <Link className={styles.navLink} to='/contact'>Contact</Link>
                </nav>
                <img
                    onClick={() => toggleMenu()}
                    className={styles.menuIcon}
                    src={hamburger}
                    alt="" />
            </div>
        </header>
    )
}

export default Header