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

    // scroll to top
    const scrollToTop = () => {
        open && toggleMenu()
        window.scrollTo({
            top: 0,
        });
    }

    return (
        <header className={`${style.header} ${props.dark ? theme.darkTheme : theme.lightTheme}`}>
            <div className={style.wrapper}>
                <h3 className={style.logo}>Danny Seng</h3>
                <nav className={style.nav}>
                    <button className={style.link} onClick={scrollToTop}>Home</button>
                    <a className={style.link} href='#work'>Work</a>
                    <a className={style.link} href='#contact'>Contact</a>
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
                            <button className={style.link} onClick={scrollToTop}>Home</button>
                            <a className={style.link} onClick={toggleMenu} href='#work'>Work</a>
                            <a className={style.link} onClick={toggleMenu} href='#contact'>Contact</a>
                        </motion.nav>
                    )}
                </AnimatePresence>
                <Hamburger
                    onClick={toggleMenu}
                    className={style.hamburger}
                />
            </div>
        </header>
    )
}

export default Header