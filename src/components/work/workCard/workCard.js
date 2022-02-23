import style from './workCard.module.css'
import Button from '../../button/Button'

const workCard = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.projectWrapper}>
        <img
          src={props.image}
          alt={`"${style.title}" project thumbnail`}
          className={style.thumbnail}
        />
        <div className={style.content}>
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.description}>{props.description}</p>
          <Button className={style.button} variant="cta" label="View Live" href={props.live} />
          {props.github && <Button className={style.button} variant="secondary" label="Github" href={props.github} />}
        </div>
      </div>
    </div>
  )
}

export default workCard