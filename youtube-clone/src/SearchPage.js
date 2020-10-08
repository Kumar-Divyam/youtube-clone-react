import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './ChannelRow.css';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="SearchPage">
            <h2>Search</h2>
            <div className="SearchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                channel="SciFi"
                verified
                subs="1M"
                noOfVideos={101}
                description="Science is everywhere, all around. Its goood bad mad......saufuashdhasodhskadsh diuugdasidasbnd sacbasgasihxasndxiwquhd sdbnwqd8hasdnw dqihd9wqjdiojqwoid"                
            />
            <hr />
            <VideoRow 
                views="8.9M" 
                subs="1.1M" 
                description="freaking experiments and gray secrets" 
                timestamp="19 minutes ago" 
                channel="SciFi" 
                title="Booooom Experimaaants" 
                image="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            />
            <VideoRow 
                views="8.9M" 
                subs="1.1M" 
                description="freaking experiments and gray secrets" 
                timestamp="19 minutes ago" 
                channel="SciFi" 
                title="Booooom Experimaaants" 
                image="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            />
            <VideoRow 
                views="8.9M" 
                subs="1.1M" 
                description="freaking experiments and gray secrets" 
                timestamp="19 minutes ago" 
                channel="SciFi" 
                title="Booooom Experimaaants" 
                image="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            />
            <VideoRow 
                views="8.9M" 
                subs="1.1M" 
                description="freaking experiments and gray secrets" 
                timestamp="19 minutes ago" 
                channel="SciFi" 
                title="Booooom Experimaaants" 
                image="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            />
            <VideoRow 
                views="8.9M" 
                subs="1.1M" 
                description="freaking experiments and gray secrets" 
                timestamp="19 minutes ago" 
                channel="SciFi" 
                title="Booooom Experimaaants" 
                image="https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            />
            
        </div>
    );
}

export default SearchPage;
