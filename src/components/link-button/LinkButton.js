import styles from './LinkButton.module.css'

export default function LinkButton({ variant, className, href, label, contact }) {
  return (
    <a
      className={`${styles.base} ${styles[variant]} ${styles[className]}`}
      href={href}
      target={(variant === "transparent" || contact) ? "" : "blank_"}
    >
      {label}
    </a>
  )
}
