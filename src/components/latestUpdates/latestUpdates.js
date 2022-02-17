import React from 'react'
import style from './latestUpdates.module.css'
import theme from '../../App.module.css'
import TransparentButton from '../button/transparentButton'

import test from '../../assets/images/aff-thumbnail.png'

const LatestUpdates = () => {

  const url = "https://medium.com/feed/@dannyseng"

  return (
    <div className={theme.sectionWrapper}>
      <TransparentButton href="#latestUpdates" label="latest updates" />
      <div className={style.latestUpdatesWrapper}>
        <img className={style.images} src={test} alt="" />
        <img className={style.images} src={test} alt="" />
        <img className={style.images} src={test} alt="" />
        <img className={style.images} src={test} alt="" />
        <img className={style.images} src={test} alt="" />
        <img className={style.images} src={test} alt="" />
      </div>
    </div>
  )
}

export default LatestUpdates