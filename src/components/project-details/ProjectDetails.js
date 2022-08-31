import style from './ProjectDetails.module.css';
import '../../index.css';

export default function ProjectDetails({ close, title, video, thumbnail, brand, skills, status }) {
    return (
        <>
            <div className={`${style.modalContainer} ${'theme'}`}>
                <div className={style.heading}>
                    <h1 className={style.brand}>{brand}</h1>
                    <p className={style.title}>{title}</p>
                </div>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est optio laboriosam non impedit
                    reprehenderit odit iure, a dignissimos eum nostrum possimus, quisquam voluptatem doloribus id
                    mollitia soluta commodi explicabo provident!
                </p>
                <button className={style.button} onClick={close}>
                    {status === 'demo' && 'View Demo'}
                    {status === 'live' && 'View Live'}
                    {status === 'offline' && 'View Snapshot'}
                </button>
                <button className={style.button} onClick={close}>
                    Back to Projects
                </button>
            </div>
        </>
    );
}
