import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { ReactComponent as SunIcon } from '../../assets/icons/sun-shape.svg'
import theme from '../../App.module.css'

const Header = (props) => {

    const [open, cycleOpen] = useCycle(false, true);

    const toggleDark = () => {
        props.callback.darkCheck(!props.dark)
    }

    const toggleMenu = () => {
        cycleOpen()
        props.callback.menuCheck(!props.menu)
    }

    return (
        <header className={`${styles.header} ${props.dark ? theme.darkTheme : theme.lightTheme}`}>
            <div className={styles.headerWrapper}>
                <h3 className={styles.logo}>Danny Seng</h3>
                <nav className={styles.nav}>
                    <Link className={styles.navLink} to='/'>Home</Link>
                    <Link className={styles.navLink} to='/work'>Work</Link>
                    <Link className={styles.navLink} to='/contact'>Contact</Link>
                </nav>
                <SunIcon
                    onClick={toggleDark}
                    className={styles.sunIcon} />
                <AnimatePresence>
                    {open && (
                        <motion.nav
                            initial={{
                                height: 0,
                            }}
                            animate={{
                                height: "max-content",
                            }}
                            transition={{
                                ease: "easeInOut",
                            }}
                            exit={{
                                height: 0,
                            }}
                            className={styles.navMobile}>
                            <Link className={styles.navLink} to='/'>Home</Link>
                            <Link className={styles.navLink} to='/work'>Work</Link>
                            <Link className={styles.navLink} to='/contact'>Contact</Link>
                        </motion.nav>
                    )}
                </AnimatePresence>
                <Hamburger
                    onClick={toggleMenu}
                    className={styles.menuIcon}
                    alt="" />
            </div>

        </header>
    )
}

export default Header