import React from 'react'
import styles from './Hero.module.css'
import photo from '../../assets/images/default.png'
import Button from '../button/Button'

const Hero = (props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, exercitationem quae suscipit expedita impedit dolor!</p>
                    <Button
                        label="Email Me: danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                        variant="cta"
                        dark={props.dark}
                    />
                </div>
                <img className={styles.photo} src={photo} alt="" />
            </div>
        </div>
    )
}

export default Hero