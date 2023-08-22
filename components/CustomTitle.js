import react from "react"
import style from '../styles/profile.module.css'

export const CustomTitle = ({elements}) => {
    return(
      <div className={style.custom_title}>
        <p className={style.subtitle}>{elements.subtitle}</p>
        <p className={style.content}><b> {elements.content}</b></p>
      </div>
    )
}