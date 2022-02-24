import React from 'react'
import style from './Hero.module.css'
import cool from '../../assets/videos/cool.mp4'
import photo from '../../assets/images/cartoon-danny-min.png'
import Button from '../button/Button'

const Hero = (props) => {
    return (
        <section className={style.block}>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <h1 className={style.heading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={style.paragraph}>I'm a <strong>front-end web developer</strong> specializing in pixel-perfect, responsive web design. My framework of choice is React.js, however, I have a solid foundation in HTML, CSS, and JavaScript.</p>
                    <p className={style.paragraph}><em>I'm ready to make an impact on your projects.</em></p>
                    <Button
                        label="Email me at danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                        variant="cta"
                        dark={props.dark}
                        className={style.button}
                    />
                </div>
                <div className={style.photoWrapper}>
                    <video loop muted autoPlay type="video/mp4" className={style.video} src={cool} alt="Animated purple background" />
                    <img className={style.photo} src={photo} alt="Portrait of Danny Seng" />
                </div>
            </div>
        </section>
    )
}

export default Hero