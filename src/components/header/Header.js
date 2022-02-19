import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

// svgs imported as components
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import { ReactComponent as Sun } from '../../assets/icons/sun-shape.svg'

// stylesheets
import style from './Header.module.css'
import theme from '../../App.module.css'

const Header = (props) => {

    const [open, cycleOpen] = useCycle(false, true);

    // toggled by the sun icon and switches dark/light theme
    const toggleDark = () => {
        props.callback.darkCheck(!props.dark)
    }

    // toggled by the hamburger menu based on open state
    const toggleMenu = () => {
        cycleOpen()
        props.callback.menuCheck(!props.menu)
    }

    return (
        <header className={`${style.header} ${props.dark ? theme.darkTheme : theme.lightTheme}`}>
            <div className={style.wrapper}>
                <h3 className={style.logo}>Danny Seng</h3>
                <nav className={style.nav}>
                    <Link className={style.link} to='/'>Home</Link>
                    <Link className={style.link} to='/work'>Work</Link>
                    <Link className={style.link} to='/contact'>Contact</Link>
                </nav>
                <Sun
                    onClick={toggleDark}
                    className={style.sun} />
                <AnimatePresence>
                    {open && (
                        <motion.nav
                            // mobile menu animation
                            initial={{
                                height: 0,
                            }}
                            animate={{
                                height: 'max-content',
                            }}
                            transition={{
                                ease: "easeInOut",
                            }}
                            exit={{
                                height: 0,
                            }}
                            className={style.menu}>
                            <Link className={style.link} to='/'>Home</Link>
                            <Link className={style.link} to='/work'>Work</Link>
                            <Link className={style.link} to='/contact'>Contact</Link>
                        </motion.nav>
                    )}
                </AnimatePresence>
                <Hamburger
                    onClick={toggleMenu}
                    className={style.hamburger}
                    alt="" />
            </div>
        </header>
    )
}

export default Header