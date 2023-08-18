import React,{useEffect} from 'react'
import PostHead from './PostHead'
import style from '../styles/singlePost.module.css'
import styleRep from '../styles/postCard.module.css'
import MediaDetails from './MediaContentDetails'
import useFetch from '../hooks/useFetch'

export default function SinglePost({ post }) {
  const [loading, error, data] = useFetch('http://localhost:1337/api/profiles/1?populate=*');
  useEffect(() => {},[])
  return (
    <div>
        <div key={post.id} className={style.allPost}>
          <div>
            <PostHead postDate={post.attributes.updatedAt} postCategory={post.attributes.categories.data} profile={data}/>
            <div className={styleRep.title_cont}><h2 id={styleRep.post_title}>{post.attributes.title}</h2></div>
            <div className={styleRep.body_cont}>
              <p id={styleRep.body_style}>
                {post.attributes.body}
              </p>
            </div>
          </div>
        </div>
        <div className={style.allMedia}>
          <MediaDetails media={post.attributes.media.data}/>
        </div>
    </div>
    
  )
}
