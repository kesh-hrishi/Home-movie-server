

import React, {useRef, useEffect} from 'react'

const VideoPlayer = ({videoId}) => {
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
  return (
    <video className='videoplay' ref={videoRef}  controls >
        <source src={`http://192.168.1.14:3000/videos/${videoId}`} type='video/mp4'></source>
        Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer