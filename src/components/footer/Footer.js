import dayjs from "dayjs";

import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

import style from "./Footer.module.css";

export default function Footer() {
    // gets current date for the copyright
    const year = dayjs().format(`YYYY`);

    return (
        <footer className={style.block}>
            <div className={style.container}>
                <div className={style.copyright}>
                    <span className={style.brand}>danny seng</span>
                    <time>Copyright {year}</time>
                </div>
                <div className={style.socialContainer}>
                    <a className={style.social} href="https://medium.com/@dannyseng" target="blank_">
                        <Medium className={style.socialIcon} />
                    </a>
                    <a className={style.social} href="https://www.linkedin.com/in/dannyseng/" target="blank_">
                        <Linkedin className={style.socialIcon} />
                    </a>
                    <a className={style.social} href="http://www.github.com/dnnysng" target="blank_">
                        <Github className={style.socialIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
