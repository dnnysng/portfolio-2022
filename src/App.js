import { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import WorkGrid from "./components/work-grid/WorkGrid";
import Contact from "./components/contact/Contact";

import style from "./App.module.css";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`${style.container} ${"theme"}`}>
            <button disabled className={style.anchor} id="top"></button>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <button disabled className={`${style.anchor} ${style.projects}`} id="projects"></button>
            <WorkGrid />
            <button disabled className={style.anchor} id="contact"></button>
            <Contact />
            <Footer />
        </div>
    );
}
