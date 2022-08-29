import style from './ProjectDetails.module.css';
import '../../index.css';

export default function ProjectDetails({ close }) {
    return (
        <>
            <div className={`${style.modalContainer} ${'theme'}`}>
                <button onClick={close}>Close</button>
            </div>
        </>
    );
}
