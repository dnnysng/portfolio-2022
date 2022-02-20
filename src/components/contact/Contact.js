import React from 'react'
import style from './Contact.module.css'
import Button from '../button/Button'

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Contact Me</h1>
        <p className={style.paragraph}>If you're looking for a frontend developer I'm currently available for hire. Let's talk!</p>
        <Button variant="cta" label="Send an email to danny.s.seng@gmail.com" />
      </div>
    </div>
  )
}

export default Contact