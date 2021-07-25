import React from 'react'
import './Chatheader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
function Chatheader({channelName}) {
    return (
        <div className="chatheader">
            <div className="chatheader_left">
             <h3>
             <span className="hash">#</span>
             {channelName}
             </h3>
             
            </div>
            <div className="chatheader_right">
                <NotificationsIcon/>
                <EditLocationIcon />
                <PeopleAltIcon/>
                <div className="search">
                    <input placeholder="search"/>
                    <SearchIcon/>
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}

export default Chatheader
