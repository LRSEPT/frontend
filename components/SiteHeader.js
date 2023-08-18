import Link from "next/link"
import style from "../styles/SiteHeaderS.module.css"

export default function SiteHeader() {
  return (
    <div className={style.all} >
      <div className={style.link_container}>
        <div className={style.link_to}>
          <Link href="/"><h1>Amir Loris' blog</h1></Link>
        </div>
      </div>
      <div className={style.profile_container}>
        <div className={style.link_to}>
          <Link href="/profile"><h1>Profile</h1></Link>
        </div>
      </div>
    </div>
  )
}