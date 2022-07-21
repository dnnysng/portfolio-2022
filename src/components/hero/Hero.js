import LinkButton from '../link-button/LinkButton';

import style from './Hero.module.css';

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
                        I'm an experienced{' '}
                        <strong>Front-end Designer & Developer</strong>{' '}
                        specializing in pixel-perfect websites and components.
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
    );
}
