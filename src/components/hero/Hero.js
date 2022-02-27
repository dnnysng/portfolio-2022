import React from 'react'
import style from './Hero.module.css'
import Button from '../button/Button'

const Hero = (props) => {
    return (
        <section className={style.block}>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <h1 className={style.heading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={style.paragraph}>I'm a <strong>front-end web developer</strong> specializing in pixel-perfect, responsive web design. My framework of choice is React.js</p>
                    <p className={style.paragraph}><em>I'm ready to make an impact on your projects.</em></p>
                    <Button
                        label="Email me at danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                        variant="cta"
                        dark={props.dark}
                        className={style.button}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero