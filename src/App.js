import { useState } from 'react';

import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

import style from './App.module.css';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`${style.container} ${'theme'}`}>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Home menu={isMenuOpen} />
            <Footer />
        </div>
    );
}
