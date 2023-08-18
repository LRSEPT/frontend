import react from "react";
import style from '../styles/MediaDetails.module.css'

export const VideoCard = ({detVideos}) => {
    return (
        detVideos.length ? detVideos.map((vid) => (
            <div className={style.image_container}>
                <video src={vid.url} className={style.single_video} key={vid.id}     onClick={() => window.open(vid.url)}/>
                <p className={style.image_title} onClick={() => window.open(vid.url)} >{vid.title.toString().slice(0,-4)}</p>
            </div>
        )):''
    )
}