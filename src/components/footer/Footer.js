import React from 'react'
import style from './Footer.module.css'
import Button from '../button/Button'

// social icons
import { ReactComponent as Medium } from '../../assets/icons/medium.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'

const Footer = () => {

  // gets current date for the copyright
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={style.block}>
      <div className={style.wrapper}>
        <div className={style.copyright}>Made by Danny Seng - Copyright {year}</div>
        <div className={style.socialWrapper}>
          <Button
            variant="social"
            label={<Medium />}
            href="https://medium.com/@dannyseng"
            target="blank_" />
          <Button
            variant="social"
            label={<Linkedin />}
            href="https://www.linkedin.com/in/dannyseng/"
            target="blank_" />
          <Button
            variant="social"
            label={<Github />}
            href="http://www.github.com/dnnysng"
            target="blank_" />
        </div>
      </div>
    </footer>
  )
}

export default Footer