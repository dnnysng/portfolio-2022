import React from 'react'
import style from './LoadSpinner.module.css'

const LoadSpinner = () => {
  return (
    <div className={style.bg}>
      <div className={style.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadSpinner