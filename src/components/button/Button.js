import React from 'react'
import styles from './Button.module.css'

/* buttons get props from parent */
const Button = (props) => {
    return (
        <a
            className={`${styles.base} ${styles[props.variant]} ${props.className}`}
            href={props.href}
            target={props.variant === "transparent" ? "" : "blank_"}
        >
            {props.label}
        </a>
    )
}

export default Button