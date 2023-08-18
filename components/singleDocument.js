import react from "react";
import style from '../styles/MediaContent.module.css';

export const SingleFile = ({files}) => {
    return (
        files.length ?
        <div className={style.files}>
            <div className={style.files_counter}>
                <b>{`Documents (${files.length} file${files.length > 1 ? '(s)':''}) :`}</b>
            </div>
            <div className={style.file_title}>
            {
                <a className={style.single_file} onClick={() => window.open(files[0].url)}>{files[0].title.toString().slice(0,58)}<i style={{fontSize: '18px'}}>{files[0].title.toString().length >= 58 ? ' ...':''}</i></a>
            }
            </div>
        </div> :''
    )
}