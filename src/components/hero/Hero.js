import React from 'react'
import style from './Hero.module.css'
import Button from '../button/Button'

const Hero = (props) => {
    return (
        <section className={style.block}>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <h1 className={style.heading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={style.paragraph}>I'm a <strong>front-end web developer</strong> specializing in pixel-perfect, responsive web design. I have a solid foundation in HTML, CSS, and JS. I love building with React.js, however, I'm open all technologies and enjoy learning different ways to build websites and web applications.</p>
                    <Button
                        label="Email me at danny.s.seng@gmail.com"
                        href="#contact"
                        variant="cta"
                        dark={props.dark}
                        className={style.button}
                        contact={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero