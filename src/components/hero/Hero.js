import React from 'react'
import styles from './Hero.module.css'
import photo from '../../assets/images/default.png'
import Button from '../button/button'

const Hero = (props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.topWrapper}>
                <div className={styles.topContent}>
                    <h1 className={styles.topHeading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={styles.topDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, exercitationem quae suscipit expedita impedit dolor!</p>
                    <Button
                        className={styles.topButton}
                        label="danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                        dark={props.dark}
                    />
                </div>
                <img className={styles.topPhoto} src={photo} alt="" />
            </div>
        </div>
    )
}

export default Hero