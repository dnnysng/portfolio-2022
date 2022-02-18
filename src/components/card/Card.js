import React from 'react'
import style from './Card.module.css'

import test from '../../assets/images/aff-thumbnail.png'

const Card = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.thumbnail} src={test} alt="" />
      <div className={style.content}>
        <h2 className={style.title}>My Amazing Blog Title</h2>
        <p className={style.excerpt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio magni itaque quidem temporibus veniam quos quaerat possimus repudiandae. Enim id ipsa quod sequi ab dolore repellendus? Reprehenderit aut quidem iure deleniti dolorem reiciendis magni, consequuntur placeat nemo a dolore minima! Corporis adipisci explicabo consequuntur. A adipisci expedita quo blanditiis.</p>
        <div className={style.footer}>
          <p className={style.date}>March 01, 2022</p>
          <p className={style.views}>634</p>
        </div>
      </div>
    </div>
  )
}

export default Card