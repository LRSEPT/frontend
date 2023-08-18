import react from "react";
import style from '../styles/MediaContent.module.css';

export const SingleAudio = ({audios}) => {
    return (
        audios.length ?
        <div className={style.files}>
            <div className={style.files_counter}>
                <b>{`Audios (${audios.length} audio${audios.length > 1 ? '(s)':''}) :`}</b>
            </div>
            <div className={style.file_title}>
            {
                <a className={style.single_file} onClick={() => window.open(audios[0].url)}>{audios[0].title.toString().slice(0,58)}<i style={{fontSize: '18px'}}>{audios[0].title.toString().length >= 58 ? ' ...':''}</i></a>
            }
            </div>
        </div> :''
    )
}