import React, { useEffect } from 'react'
import Link from 'next/link'
import Axios from 'axios'
import style from '../../styles/singlePost.module.css'
import SinglePost from '../../components/FullSinglePost'

export default function Id({post}) {
  return (
    <div>
      <button className={style.goBack} href="/">
        <Link href="/"> Go Back Home </Link>
      </button>
        <SinglePost post={post.data} />
    </div>
  )
}

const instanceAxios = Axios.create({
  baseURL: 'http://127.0.0.1:1337/api',
})

export const getServerSideProps = async (context) => {
  const id = context.params.id 
  const {data:post} = await instanceAxios.get("/posts/"+id+"?populate=*")
  return { props: { post } }
}
