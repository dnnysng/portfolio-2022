import React from 'react'

// sections
import Hero from '../components/hero/Hero'
import Work from '../components/work/Work'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

// styles
import style from './Page.module.css'
import theme from '../App.module.css'

const home = (props) => {
    return (
        <div
            // page slides down with an open menu
            className={`
                ${style.base}
                ${props.menu && style.slideDown}
                ${props.dark ? theme.darkTheme : theme.lightTheme}
            `}>
            <Hero />
            <Work />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default home