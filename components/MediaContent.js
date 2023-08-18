import React, { useEffect, useState } from 'react'
import style from '../styles/MediaContent.module.css'
import { SingleAudio } from './singleAudio';
import { SingleFile } from './singleDocument';
import { SingleImage } from './singleImage';
import { SingleVideo } from './singleVideo';
import { getFileType } from './FileType';

export default function MediaContent({ media }) {
    if(media === null || media === undefined) {return ;}

    const [images, setImages] = useState([])
    const [files, setFiles] = useState([])
    const [videos, setVideos] = useState([])
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const imgs = new Set();
        const vids = new Set();
        const fls = new Set();
        const auds = new Set();
        media.forEach((element) => {
            getFileType(element.attributes.ext) === "Image" ? 
            imgs.add(`http://localhost:1337${element.attributes.url}`):
            getFileType(element.attributes.ext) === "Video" ?
            vids.add(`http://localhost:1337${element.attributes.url}`):
            getFileType(element.attributes.ext) === "Audio" ?
            auds.add({url : `http://localhost:1337${element.attributes.url}`, title: element.attributes.name}):
            fls.add({url : `http://localhost:1337${element.attributes.url}`, title: element.attributes.name});
        });
        setImages([...Array.from(imgs)]);
        setVideos([...Array.from(vids)]);
        setAudios([...Array.from(auds)]);
        setFiles([...Array.from(fls)]);
    },[media])

    return (
        <div className={style.media_container}>
            <div className={style.image_video}>
                <div className={style.images}>
                    <SingleImage images={images} />
                </div>
                <div className={style.images}>
                    <SingleVideo videos={videos} />
                </div>
            </div>
            <div>
                <SingleFile files={files} />
                <SingleAudio audios={audios} />
            </div>
            
        </div>
    )
}
