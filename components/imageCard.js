import react from "react"
import style from '../styles/MediaDetails.module.css'
import { Image } from '@nextui-org/react';

export const ImageCard = ({ detImages }) => {
    return (
        detImages.length ? 
            detImages.map((image) => (
                <div className={style.image_container}>
                    <Image className={style.single_image} src={image.url} key={image.id} onClick={() => window.open(image.url)} />
                    <p className={style.image_title} onClick={() => window.open(image.url)} >{image.title.toString().slice(0,-4)}</p>
                </div>
            )):''
    )
}