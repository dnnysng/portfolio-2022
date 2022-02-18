import React from 'react'
import style from './Work.module.css'

// featured work images
import game from '../../assets/images/game-thumbnail.png'
import foodie from '../../assets/images/aff-thumbnail.png'
import trailers from '../../assets/images/trailers-thumbnail.png'
import coondex from '../../assets/images/coondex-thumbnail.png'

import Button from '../button/Button'

const Work = () => {

  return (
    <section className={style.work}>
      <Button
        variant="transparent"
        href="#work"
        label="featured work"
      />
      <div
        id="work"
        className={style.wrapper}
      >
        <div className={style.left}>
          <img className={style.image} src={game} alt="" />
          <img className={style.image} src={foodie} alt="" />
        </div>
        <div className={style.right}>
          <img className={style.image} src={trailers} alt="" />
          <img className={style.image} src={coondex} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Work