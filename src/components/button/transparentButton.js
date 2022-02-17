import React from 'react'
import style from './button.module.css'

const transparentButton = (props) => {
  return (
    <a className={style.transparentButton} href={props.href}>{props.label}</a>
  )
}

export default transparentButton