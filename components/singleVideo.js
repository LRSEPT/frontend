import react from "react";
import style from '../styles/MediaContent.module.css';

export const SingleVideo = ({videos}) => {
    return (
        videos.length ? <video src={videos[0]} className={style.single_image} key="#" onClick={() => window.open(videos[0])}/>:''
    )
}