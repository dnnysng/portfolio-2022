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
          <a className={style.social} href="https://medium.com/@dannyseng" target="blank_"><Medium /></a>
          <a className={style.social} href="https://www.linkedin.com/in/dannyseng/" target="blank_"><Linkedin /></a>
          <a className={style.social} href="http://www.github.com/dnnysng" target="blank_"><Github /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer