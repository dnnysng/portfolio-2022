import React from 'react'
import style from './Card.module.css'
import sanitizeHtml from 'sanitize-html'

const Card = (props) => {

  // cleans the blog excerpt of unecessary html tags
  const dirtyHtml = props.description
  const cleanHtml = sanitizeHtml(dirtyHtml, {
    allowedTags: [],
    nonTextTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'figcaption']
  })

  // formats the date to "Month Day, Year"
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const iso = new Date(props.date)
  const month = iso.getMonth()
  const day = iso.getDate()
  const year = iso.getFullYear()
  const date = `${months[month]} ${day}, ${year}`;

  return (
    <div className={style.wrapper}>
      <a href={props.link} target="blank_">
        <img className={style.thumbnail} src={props.thumbnail} alt={`${props.title} - Thumbnail`} />
      </a>
      <div className={style.content}>
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.excerpt}>{cleanHtml}</p>
        <div className={style.footer}>
          <p className={style.date}>{date}</p>
          <a className={style.views} href={props.link} target="blank_">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Card