import React from 'react'
import style from './Contact.module.css'
import Button from '../button/Button'

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Contact Me</h1>
        <p className={style.paragraph}>I'm an experienced <strong>frontend developer</strong> available for hire. Let's talk!</p>
        <Button variant="cta" label="Email me at danny.s.seng@gmail.com" />
      </div>
    </div>
  )
}

export default Contact