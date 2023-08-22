import react from "react";
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { CustomTitle } from "./CustomTitle";
import style from '../styles/profile.module.css'

export const CustomStatus = ({elements}) => {
    const stat = elements.content.toString().split(', at ');
    console.log(stat);
    return(
      <div className={style.status_container}>
        <div className={style.status_picture}>
          <Image src={elements.image} />
        </div>
        <div className={style.status_content}>
          <CustomTitle elements = {{subtitle : "Status : ", content : stat[0]}}/>
          <div style={{marginBottom:'15px'}}></div>
          <Link onClick = {() => {window.open(elements.statusSRC)}}><CustomTitleStatus elements = {{subtitle : "at : ", content : stat[1]}}/></Link>
          <div style={{marginBottom:'20px'}}></div>
        </div>
      </div>
    )
  }

export const CustomTitleStatus = ({elements}) => {
    return(
      <div className={style.custom_title}>
        <p className={style.subtitle}>{elements.subtitle}</p>
        <p className={style.status_link}><b> {elements.content}</b></p>
      </div>
    )
}