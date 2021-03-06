import dayjs from 'dayjs'

import { ReactComponent as Medium } from '../../assets/icons/medium.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'

import style from './Footer.module.css'

export default function Footer() {

  // gets current date for the copyright
  const year = dayjs().format(`YYYY`)

  return (
    <footer className={style.block}>
      <div className={style.container}>
        <div className={style.copyright}>
          Made by Danny Seng - Copyright <time>{year}</time>
        </div>
        <div className={style.socialContainer}>
          <a
            className={style.social}
            href="https://medium.com/@dannyseng"
            target="blank_"
          >
            <Medium />
          </a>
          <a
            className={style.social}
            href="https://www.linkedin.com/in/dannyseng/"
            target="blank_"
          >
            <Linkedin />
          </a>
          <a
            className={style.social}
            href="http://www.github.com/dnnysng"
            target="blank_"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}
