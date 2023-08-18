import react from "react";
import style from '../styles/MediaContent.module.css';
import { Image } from '@nextui-org/react';

export const SingleImage = ({images}) => {
    return (
        images.length ? 
        <div>
            <Image src={images[0]} className={style.single_image} key="#" onClick={() => window.open(images[0])}/>
        </div>                    
        :''
    )
}
