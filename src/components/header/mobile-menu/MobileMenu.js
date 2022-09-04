import { motion } from "framer-motion";

import style from "./MobileMenu.module.css";

export default function MobileMenu({ toggleMenu }) {
    const variants = {
        start: {
            x: "-100vw",
        },
        open: {
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
        close: {
            x: "-100vw",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.nav className={style.menu} variants={variants} initial="start" animate="open" exit="close">
            <a className={style.link} onClick={toggleMenu} href="#top">
                Home
            </a>
            <a className={style.link} onClick={toggleMenu} href="#projects">
                Projects
            </a>
            <a className={style.link} onClick={toggleMenu} href="#contact">
                Contact
            </a>
        </motion.nav>
    );
}
