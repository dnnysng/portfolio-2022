import style from './ProjectCard.module.css';

export default function ProjectCard({ video, thumbnail, title, brand, skills, status }) {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h4 className={style.cardBrand}>{brand}</h4>
                <div className={`${style.cardStatus} ${style[status]}`}>● {status}</div>
            </div>
            {video && (
                <video
                    src={video}
                    alt=""
                    className={style.cardThumbnail}
                    type="video/mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}
            {thumbnail && <img src={thumbnail} alt="" className={style.cardThumbnail} />}
            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{title}</h3>
                <p className={style.cardSkills}>
                    {skills.map((skill, i, arr) => {
                        if (arr.length - 1 === i) {
                            return ` ${skill}`;
                        } else {
                            return `${skill}, `;
                        }
                    })}
                </p>
            </div>
        </div>
    );
}
