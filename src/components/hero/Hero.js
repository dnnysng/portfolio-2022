import style from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={style.block}>
            <div className={style.sectionHeader}>
                <h2 className={style.hugeText}>welcome</h2>
                <p className={style.paragraph}>
                    I'm an experienced <span className={style.underline}> designer</span>{" "}
                    <span className={style.success}>+</span> <span className={style.underline}>developer</span>{" "}
                    specializing in pixel-perfect websites. Let me take your frontend projects from vision to reality.
                </p>
            </div>
        </section>
    );
}
