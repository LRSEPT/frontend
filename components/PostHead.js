import React, {useEffect} from 'react'
import { Image } from '@nextui-org/react';
import style from '../styles/postHead.module.css'
import format from 'date-fns/format'
import Link from 'next/link'

export default function PostHead({ postDate, postCategory, profile }) {
    return (
        profile &&
        <div className={style.post_head_container}>
            <Link href="/profile">
                <div className={style.image_container}>
                    <Image src={`http://localhost:1337${profile.data.attributes.profile_picture.data.attributes.url}`} alt="My Professional Picture" />
                </div>
            </Link>
            <div className={style.title}>
                <h4>{profile.data.attributes.name}</h4>
                <p>{format(new Date(postDate),"do LLLL y', at 'HH:mm")}</p>
            </div>
            <div className={style.categories}>
                <b>Tags :</b> 
                {postCategory &&
                    postCategory.map((cat) => (
                        <small className={style.single_category} key={cat.id}>{cat.attributes.name}</small>
                    ))}
            </div>
        </div>
    )
}