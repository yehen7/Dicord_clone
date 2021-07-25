import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({timestamp,user,message}) {
    return (
        <div className="messege">
            <Avatar src={user.photo}/>
            <div className="message_inf0">
                <h4>{user.displayName}<span className="message_timestamp">{new Date(timestamp?.toDate()) .toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
