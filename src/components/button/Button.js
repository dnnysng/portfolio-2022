import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
    return (
        <a className={styles.button} href={props.href}>
            {props.label}
        </a>
    )
}

export default Button