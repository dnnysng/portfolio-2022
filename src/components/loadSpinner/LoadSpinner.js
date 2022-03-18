import style from './LoadSpinner.module.css'

export default function LoadSpinner() {
  return (
    <div className={style.bg}>
      <div className={style.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
