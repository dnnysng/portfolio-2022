import style from './ProjectDetails.module.css';

export default function ProjectDetails({ close }) {
    return (
        <>
            <div className={style.modalContainer}>
                <button onClick={close}>Close</button>
            </div>
        </>
    );
}
