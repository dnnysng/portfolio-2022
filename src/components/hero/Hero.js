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
            I'm a <strong>front-end web developer</strong> specializing in pixel-perfect, responsive web design. I have a solid foundation in HTML, CSS, and JS. I love building with React.js, however, I'm open to all technologies and enjoy learning different ways to build websites and web applications.
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
