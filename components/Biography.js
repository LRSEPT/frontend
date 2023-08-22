import react from "react"
import style from '../styles/profile.module.css'

export const Biography = ({data}) => {
    return (
      <div className={style.biography_container}>
        <p className={style.bio_subtitle}>Biography : </p>
        <p className={style.bio_content}><b> {data}</b></p>
      </div>
    )
  }