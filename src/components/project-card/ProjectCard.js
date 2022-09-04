import React from "react";
import { PortalWithState } from "react-portal";

import ProjectDetails from "../project-details/ProjectDetails";

import style from "./ProjectCard.module.css";

export default function ProjectCard({ video, thumbnail, title, brand, skills, status, summary, url }) {
    function scroll() {
        document.body.style.overflowY = "scroll";
    }

    function noScroll() {
        document.body.style.overflowY = "hidden";
    }

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                    <button className={style.card} onClick={openPortal}>
                        <div className={style.cardHeader}>
                            <h3 className={style.cardBrand}>{brand}</h3>
                            <div className={`${style.cardStatus} ${style[status]}`}>● {status}</div>
                        </div>
                        {isOpen ? noScroll() : scroll()}
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
                            <h4 className={style.cardTitle}>{title}</h4>
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
                    </button>
                    {portal(
                        <>
                            <ProjectDetails
                                close={closePortal}
                                brand={brand}
                                title={title}
                                skills={skills}
                                status={status}
                                video={video}
                                thumbnail={thumbnail}
                                summary={summary}
                                url={url}
                            />
                        </>,
                    )}
                </React.Fragment>
            )}
        </PortalWithState>
    );
}
