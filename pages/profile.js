import React from 'react'
import style from '../styles/profile.module.css'
import Axios from 'axios'
import { Image } from '@nextui-org/react'
import { format } from 'date-fns';
import Link from 'next/link';

export default function Profile({ profile }) {
  const SRC = 'http://localhost:1337'+profile.data.attributes.profile_picture.data.attributes.url;
  console.log(profile)
  return (
    <div>
      <button className={style.goBack} href="/">
        <Link href="/"> Go Back Home </Link>
      </button>
      <div className={style.profile_container}>
        <div className={style.picture_desc}>
          <div className={style.picture}>
            <Image src = {SRC} />
          </div>
          <div className={style.desc}>
            <Description data = {profile.data.attributes} />
          </div>
        </div>
        <div className={style.biography}>
            <Biography data = {profile.data.attributes.biography} />
        </div>
      </div>
    </div>
  )
}

const instanceAxios = Axios.create({
  baseURL: 'http://127.0.0.1:1337/api/profiles/1?populate=*',
})

export const getServerSideProps = async () => {
  const {data:profile} = await instanceAxios.get();
  return { props: {profile}}
} 

export const Description = ({data}) => {
  const statusSRC = data.status_picture.data.attributes.url;
  const birthdate = format(new Date(data.birth_date),"do MMMM Y")
  return (
    <div className={style.custom_title_container}>
        <CustomTitle elements = {{subtitle : "Name : ", content : data.name}}/>
        <div style={{marginBottom:'10px'}}></div>
        <CustomTitle elements = {{subtitle : "Birthdate : ", content : birthdate}}/>
        <div style={{marginBottom:'5px'}}></div>
        <CustomStatus elements = {{image : `http://localhost:1337${data.status_picture.data.attributes.url}`, content : data.status}}/>
    </div>
  )
}

export const CustomTitle = ({elements}) => {
  return(
    <div className={style.custom_title}>
      <p className={style.subtitle}>{elements.subtitle}</p>
      <p className={style.content}><b> {elements.content}</b></p>
    </div>
  )
}

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
        <a><CustomTitle elements = {{subtitle : "at : ", content : stat[1]}}/></a>
        <div style={{marginBottom:'20px'}}></div>
      </div>
    </div>
  )
}

export const Biography = ({data}) => {
  return (
    <div className={style.biography_container}>
      <p className={style.bio_subtitle}>Biography : </p>
      <p className={style.bio_content}><b> {data}</b></p>
    </div>
  )
}