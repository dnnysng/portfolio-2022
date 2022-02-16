import React from 'react'
import Hero from '../components/hero/Hero'
import style from './page.module.css'

const home = () => {
    return (
        <div className={style.wrapper}>
            <Hero />
        </div>
    )
}

export default home