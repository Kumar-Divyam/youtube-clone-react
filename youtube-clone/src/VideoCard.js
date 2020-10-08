import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="VideoCard">

            <img className="VideoCard__thumbnail" src={image} alt=""  />

            <div className="VideoCard__info">
                <Avatar 
                    className="VideoCard__avatar" 
                    alt={channel} 
                    src={channelImage}/>
                <div className="VideoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard;
