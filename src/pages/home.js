import React from 'react'
import Hero from '../components/hero/Hero'
import style from './page.module.css'
import theme from '../App.module.css'
import FeaturedWork from '../components/featuredWork/featuredWork'
import LatestUpdates from '../components/latestUpdates/latestUpdates'

const home = (props) => {
    return (
        <div className={`${props.menu ? style.wrapperDown : style.wrapper} ${props.dark ? theme.darkTheme : theme.lightTheme}`}>
            <Hero />
            <FeaturedWork />
            <LatestUpdates />
        </div>
    )
}

export default home