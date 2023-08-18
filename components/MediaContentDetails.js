import React, { useEffect, useState } from 'react'
import style from '../styles/MediaDetails.module.css'
import { ImageCard } from './imageCard';
import { DocumentCard } from './documentCard';
import { AudioCard } from './audioCard';
import { VideoCard } from './videoCard';
import { getFileType } from './FileType';

export default function MediaDetails({ media }) {
    if(media === null || media === undefined) {return ;}
    const url = 'http://localhost:1337';
    const [detImages, setDetImages] = useState([])
    const [detFiles, setDetFiles] = useState([])
    const [detVideos, setDetVideos] = useState([])
    const [detAudios, setDetAudios] = useState([])

    useEffect(() => {
        const imgs = new Set();
        const vids = new Set();
        const fls = new Set();
        const auds = new Set();
        media.forEach((element) => {
            getFileType(element.attributes.ext) === "Image" ? 
            imgs.add({url : `${url}${element.attributes.url}`, id : `${element.id}`, title : `${element.attributes.name}`, width: `${element.attributes.width}` }):
            getFileType(element.attributes.ext) === "Video" ?
            vids.add({url : `${url}${element.attributes.url}`, title: `${element.attributes.name}`}):
            getFileType(element.attributes.ext) === "Audio" ?
            auds.add({url : `${url}${element.attributes.url}`, title: element.attributes.name}):
            fls.add({url : `http://localhost:1337${element.attributes.url}`, title: element.attributes.name});
        });
        setDetImages([...Array.from(imgs)]);
        setDetVideos([...Array.from(vids)]);
        setDetAudios([...Array.from(auds)]);
        setDetFiles([...Array.from(fls)]);
    },[media])

    return (
        <div className={style.media_container}>
            <div className={style.visual_container}>
                <div className={style.all_images}> 
                    <ImageCard detImages = {detImages}/>
                </div>
                <div className={style.all_videos}>
                    <VideoCard detVideos={detVideos} />
                </div>
            </div>
            <div className={style.audio_file_container}>
                <div className={style.files_container}>
                    <DocumentCard detFiles = {detFiles} />
                </div>
                <div className={style.audio_container}>
                    <AudioCard detAudios={detAudios} />
                </div>
            </div>
        </div>
    )
}