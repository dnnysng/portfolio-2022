import LinkButton from '../link-button/LinkButton'

import style from './Hero.module.css'

export default function Hero() {
  return (
    <section className={style.block}>
      <p id="hero" className={style.anchor}></p>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.heading}>
            Bringing your visions to life, one pixel at a time.
          </h1>
          <p className={style.paragraph}>
            I'm an experienced <strong>Front-end Web Developer</strong> with a demonstrated history of working in the information technology and services industry. I specialize in pixel-perfect, responsive web design.
          </p>
          <LinkButton
            label="Email me at danny.s.seng@gmail.com"
            href="#contact"
            variant="cta"
            className={style.button}
            contact={true}
          />
        </div>
      </div>
    </section>
  )
}
