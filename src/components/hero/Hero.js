import React from 'react'
import styles from './Hero.module.css'
import photo from '../../assets/images/danny-photo-400.jpg'
import Button from '../../components/button/Button'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.topWrapper}>
                <div className={styles.topContent}>
                    <h1 className={styles.topHeading}>Bringing your visions to life, one pixel at a time.</h1>
                    <p className={styles.topDescription}>I learn to build, and when I build I learn. This is what keeps me in web development.</p>
                    <Button
                        label="danny.s.seng@gmail.com"
                        href="mailto:danny.s.seng@gmail.com"
                    />
                </div>
                <img className={styles.topPhoto} src={photo} alt="" />
            </div>
            <div>
                <a href="">Featured Work</a>
            </div>
        </div>
    )
}

export default Hero