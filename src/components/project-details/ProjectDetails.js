import style from "./ProjectDetails.module.css";
import "../../index.css";

export default function ProjectDetails({ close, title, brand, status, summary, url }) {
    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            close();
        }
    }

    return (
        <dialog className={`${style.block} ${"theme"}`} onClick={handleOutsideClick}>
            <div className={style.modalContainer}>
                <div className={style.heading}>
                    <h1 className={style.brand}>{brand}</h1>
                    <p className={style.title}>{title}</p>
                </div>
                <p className={style.description}>{summary}</p>
                {status === "offline" && (
                    <p className={style.offline}>Site has been recently updated to a new frontend.</p>
                )}
                <div className={style.clickables}>
                    {status !== "offline" && (
                        <a className={style.button} href={url} target="_blank" rel="noReferrer">
                            {status === "demo" && "View Demo"}
                            {status === "live" && "View Live"}
                        </a>
                    )}
                    <button className={style.button} onClick={close}>
                        Back to Projects
                    </button>
                </div>
            </div>
        </dialog>
    );
}
