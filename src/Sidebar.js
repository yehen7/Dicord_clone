import React, { useEffect } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {selectUser} from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import db, { auth } from './firebase';
import { useState } from 'react';
function Sidebar() {

    const user=useSelector(selectUser);
    const [channel,setChannel]=useState([]);


    useEffect(()=>{
 
        db.collection('channels').onSnapshot(snapshot=>(
            setChannel(snapshot.docs.map(doc=>({
                 
                id:doc.id,
                channel:doc.data(),


            })))
        ))

    },[])
  
    const handChannel=()=>{

        const channelName=prompt("Enter a channel Name");

        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            })
        }
    }

    return (
        <div className="sidebar">
           <dic className="siderbar_top">
            <ExpandMoreIcon />
           </dic>
<div className="sidebar_channel">
    <div className="sidebar_channelHeader">
        <div className="sidebar_header">
        <ExpandMoreIcon />
        <h4>Text channel</h4>
        </div>
        < AddIcon onClick={handChannel}  className="sidebar_addchannel"/>
    </div>
    <div className="sidebar_channelList">


        {channel.map(({id,channel})=>(
 <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
        ))}
     
      
  </div>
</div>
<div className="sidebar_voice">
    <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>

    <div className="voice_info">
        <h3>Voice Connected</h3>
        <p>Stream</p>
    </div>
    <div className="sidebar_icon">
        <InfoIcon />
      <CallIcon/>
    </div>

</div>
<div className="sidebar_profile">
    <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
    <div className="sidebar_profileinfo">

        <h3>{user.displayName}</h3>
        <p>#{user.uid.substring(0,5)}</p>

    </div>

    <div className="sidebar_profileicons">
      < MicIcon/>
      <HeadsetIcon/>
      <SettingsIcon />

    </div>
</div>


        </div>
    )
}

export default Sidebar
