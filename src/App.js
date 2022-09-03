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
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <WorkGrid />
            <Contact />
            <Footer />
        </div>
    );
}
