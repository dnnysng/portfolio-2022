import style from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={style.block}>
            <div className={style.sectionHeader}>
                <h2 className={style.hugeText}>welcome</h2>
                <p className={style.paragraph}>
                    I'm an experienced <span className={style.underline}> designer</span>{' '}
                    <span className={style.success}>+</span> <span className={style.underline}>developer</span>{' '}
                    specializing in pixel-perfect websites. I'm the guy you need for your frontend projects.
                </p>
            </div>
        </section>
    );
}
