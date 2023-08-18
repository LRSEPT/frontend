import react from "react";
import style from '../styles/MediaDetails.module.css'

export const AudioCard = ({detAudios}) => {
    return (
        detAudios.length ?
        <div className={style.all_audios}>
            <div className={style.audios_counter}>
                <b>{`Audios (${detAudios.length} audio(s)) :`}</b>
            </div>
            <div className={style.audio_title}>
            {
                detAudios.map((aud) => (
                    <div><b> - </b><a className={style.single_audio} onClick={() => window.open(aud.url)}>{aud.title.toString().slice(0,aud.title.toString().length-4).slice(0,70)}<i style={{fontSize: '18px'}}>{aud.title.toString().length >= 74 ? ' ...':''}</i></a></div>
                ))
            }
            </div>
        </div> :''
    )
}