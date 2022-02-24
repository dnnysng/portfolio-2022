import React from 'react'
import style from './Contact.module.css'
import Button from '../button/Button'

const Contact = () => {
  return (
    <section id="contact" className={style.block}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Contact Me</h1>
        <p className={style.paragraph}>I'm an experienced <strong>frontend developer</strong> available for hire. Let's talk!</p>
        <Button variant="cta" label="Email me at danny.s.seng@gmail.com" href="mailto:danny.s.seng@gmail.com" />
      </div>
    </section>
  )
}

export default Contact