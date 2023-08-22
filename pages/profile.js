import React from 'react'
import style from '../styles/profile.module.css'
import Axios from 'axios'
import { Image } from '@nextui-org/react'
import { Link } from '@nextui-org/react';
import { Biography } from '../components/Biography';
import { Description } from '../components/Description';

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
