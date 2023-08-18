import React, {useEffect} from 'react'
import PostHead from './PostHead'
import style from '../styles/postCard.module.css'
import styleRep from '../styles/postCard.module.css'
import Link from 'next/link'
import MediaContent from './MediaContent'
import useFetch from '../hooks/useFetch'

export default function PostCard({ post, post_id }) {
  const [loading, error, data] = useFetch('http://localhost:1337/api/profiles/1?populate=*');
  useEffect(() => {},[])
  return (
    <div className={style.post}>
        <div key={post.attributes.id}>
            <div>
                <PostHead postDate={post.attributes.updatedAt} postCategory = {post.attributes.categories.data} profile={data} />
                <div className={styleRep.title_cont}><h2 id={styleRep.post_title}>{post.attributes.title}</h2></div>
                <div className={style.body_cont}>
                  <p id={styleRep.body_style}>
                    {post.attributes.body.toString().slice(0,200)} {post.attributes.body.toString().length >= 200?"... ":''}
                    <Link href={`/details/${post_id}`} className={style.seeMore}>See More</Link>
                  </p>
                </div>
                <div className={style.media_cont}>
                  {
                    post.attributes.media.data === null ? '':
                    <MediaContent media = {post.attributes.media.data}/>
                  }
                </div>
            </div>
        </div>
    </div>
  )
}
