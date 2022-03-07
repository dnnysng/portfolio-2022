import style from './workCard.module.css'
import Button from '../../button/Button'

const workCard = ({ image, title, description, live, github, code, cardVariant, tech }) => {
  return (
    <div className={`${style.wrapper} ${cardVariant}`}>
      <img
        src={image}
        alt={`"${style.title}" project thumbnail`}
        className={style.thumbnail}
      />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {tech &&
          <div className={style.tagWrapper}>
            {tech.map(t => <span className={style.tag}>{t}</span>)}
          </div>
        }
        <p className={style.description}>{description}</p>
        <Button className={style.button} variant="cta" label="View Live" href={live} />
        {github && <Button className={style.button} variant="secondary" label="Github" href={github} />}
        {console.log(code)}
        {code && <Button className={style.button} variant="secondary" label="Sample Code" href={code} />}
      </div>
    </div>
  )
}

export default workCard