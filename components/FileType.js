import react from "react";

export const getFileType = (extension) => {
    const imageExtension = [".jpeg",".jpg",".gif",".svg",".tiff",".ico",".dvu"]
    const videoExtension = ['.mpeg','.mp4','.quicktime','.wmv','.avi','.flv','.mov']
    const audioExntesion = ['.mp3','.wav','.ogg']
    if(imageExtension.includes(extension.toLowerCase())) return("Image")
    else if(videoExtension.includes(extension.toLowerCase())) return("Video")
    else if(audioExntesion.includes(extension.toLowerCase())) return("Audio")
    else return("File")
}