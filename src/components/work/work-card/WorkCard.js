import LinkButton from '../../link-button/LinkButton'

import style from './WorkCard.module.css'

export default function WorkCard({
  image,
  title,
  description,
  live,
  link,
  linkType,
  cardVariant,
  tech
}) {
  return (
    <article className={`${style.container} ${style[cardVariant]}`}>
      <img
        src={image}
        alt={`${style.title} project thumbnail`}
        className={style.thumbnail}
      />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {tech &&
          <div className={style.tagContainer}>
            {tech.map(name => <span className={style.tag}>{name}</span>)}
          </div>
        }
        <p className={style.description}>{description}</p>
        <LinkButton className={style.button} variant="cta" label="View Live" href={live} />
        {link &&
          <LinkButton className={style.button} variant="secondary" label={linkType} href={link} />
        }
      </div>
    </article>
  )
}
