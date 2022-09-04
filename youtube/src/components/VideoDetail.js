import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) { return <div></div>; }

    const videourl = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className='selected-video'>

            <div className='video'><iframe  frameBorder="0" height="100%" width="100%" title='video player' allow='fullscreen;' src ={videourl} /></div>
            <div className='details'>
                <h4>{video.snippet.title}</h4>
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    );
}
export default VideoDetail