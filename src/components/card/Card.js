import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
  return (
    <div className={style.wrapper}>
      <img className={style.thumbnail} src={props.thumbnail} alt="" />
      <div className={style.content}>
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.excerpt}>{props.description}</p>
        <div className={style.footer}>
          <p className={style.date}>{props.date}</p>
          <p className={style.views}>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default Card