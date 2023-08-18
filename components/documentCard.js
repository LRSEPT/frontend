import react from "react"
import style from '../styles/MediaDetails.module.css'

export const DocumentCard = ({ detFiles }) => {
    return (
        detFiles.length ?
        <div className={style.all_files}>
            <div className={style.files_counter}>
                <b>{`Documents (${detFiles.length} file(s)) :`}</b>
            </div>
            <div className={style.file_title}>
            {
                detFiles.map((file) => (
                    <div><b> - </b><a className={style.single_file} onClick={() => window.open(file.url)}>{file.title.toString().slice(0,file.title.toString().length-4).slice(0,70)}<i style={{fontSize: '18px'}}>{file.title.toString().length >= 74 ? ' ...':''}</i></a></div>
                ))
            }
            </div>
        </div>:''
    )
}