import React from 'react'
import style from './Footer.module.css'
import Button from '../button/Button'

// social icons
import { ReactComponent as Medium } from '../../assets/icons/medium.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'

const Footer = () => {

  // gets current date for the copyright
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.copyright}>Made by Danny Seng - Copyright {year}</div>
        <div className={style.socialWrapper}>
          <Button
            variant="social"
            label={<Medium />}
            href="https://medium.com/@dannyseng" />
          <Button
            variant="social"
            label={<Linkedin />}
            href="http://www.twitter.com/dnnysng" />
          <Button
            variant="social"
            label={<Twitter />}
            href="https://www.linkedin.com/in/dannyseng/" />
        </div>
      </div>
    </footer>
  )
}

export default Footer