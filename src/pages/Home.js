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
            className={`
                ${style.base}
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