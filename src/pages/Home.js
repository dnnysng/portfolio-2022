import React from 'react'

// sections
import Hero from '../components/hero/Hero'
import Work from '../components/work/Work'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'

// styles
import style from './Home.module.css'
import theme from '../App.module.css'

const home = (props) => {
    return (
        <div
            // page slides down with an open menu
            className={`
                ${style.base}
                ${props.menu && style.hidden}
                ${props.dark ? theme.darkTheme : theme.lightTheme}
            `}>
            <Hero />
            <Work />
            <Blog />
            <Contact />
        </div>
    )
}

export default home