import React from 'react'
import style from './Hero.module.css'
import cool from '../../assets/videos/cool.mp4'
import photo from '../../assets/images/cartoon-danny.png'
import Button from '../button/Button'

const Hero = (props) => {
    return (
        <div className={style.hero}>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <h1 className={style.heading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={style.paragraph}>I'm a <strong>Frontend Developer</strong> who is ready to put my skills to work on <em>your projects</em>.</p>
                    <Button
                        label="Email me at danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                        variant="cta"
                        dark={props.dark}
                    />
                </div>
                <div className={style.photoWrapper}>
                    <video loop muted autoPlay type="video/mp4" className={style.video} src={cool} alt="" />
                    <img className={style.photo} src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero