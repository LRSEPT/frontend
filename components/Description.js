import react from "react";
import { CustomTitle } from "./CustomTitle";
import { CustomStatus } from "./CustomStatus";
import format from "date-fns/format";
import style from '../styles/profile.module.css'

export const Description = ({data}) => {
    const statusSRC = data.status_link;
    const birthdate = format(new Date(data.birth_date),"do MMMM Y")
    return (
      <div className={style.custom_title_container}>
          <CustomTitle elements = {{subtitle : "Name : ", content : data.name}}/>
          <div style={{marginBottom:'10px'}}></div>
          <CustomTitle elements = {{subtitle : "Birthdate : ", content : birthdate}}/>
          <div style={{marginBottom:'5px'}}></div>
          <CustomStatus elements = {{image : `http://localhost:1337${data.status_picture.data.attributes.url}`, content : data.status, statusSRC: statusSRC}}/>
      </div>
    )
  }