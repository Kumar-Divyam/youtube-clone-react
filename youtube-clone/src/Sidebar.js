import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow.js";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar() {
    return (
        <div className="sidebar"> 
            <SidebarRow selected Icon={HomeIcon} Title="Home"/>
            <SidebarRow Icon={WhatshotIcon} Title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} Title="Subscription"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} Title="Library" />
            <SidebarRow Icon={HistoryIcon} Title="History" />
            <SidebarRow Icon={OndemandVideoIcon} Title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} Title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} Title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} Title="Show more" />
            <hr />
        </div>
    );
}

export default Sidebar;
