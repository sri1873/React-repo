import React from 'react'

const VideoItem = ({video,onVideoSelect}) => {
    return (
        <div className='video-item' onClick={()=>onVideoSelect(video)}>
            <img className='thumbnail' src={video.snippet.thumbnails.medium.url} alt='Thumbnail' />
            <div className='details'>
                <div className='title'>{video.snippet.title}</div>
                <div className='channel'>{video.snippet.channelTitle}</div>
            </div>
        </div>
    ) 
}

export default VideoItem