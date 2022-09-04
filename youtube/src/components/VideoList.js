import React from 'react'
import VideoItem from './VideoItem'

const VideoList=({data,onVideoSelect})=>{
    const List = data.map((video) => {
        return (<VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />)
        })
    return (
                
        <div className='video-list'>{ List}</div>
        );
}
export default VideoList