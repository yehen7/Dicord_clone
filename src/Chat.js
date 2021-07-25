import React, { useEffect } from 'react'
import "./Chat.css"
import Chatheader from './Chatheader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/counter/appSlice';
import { selectUser } from './features/counter/userSlice';
import { useState } from 'react';
import db from './firebase';
import firebase from 'firebase'
function Chat() {

    const channelId=useSelector(selectChannelId);
    const user=useSelector(selectUser);
    const channelName=useSelector(selectChannelName);
    const [input,setInput]=useState("")
    const[message,setMessage]=useState([]);

    useEffect(()=>{


        if(channelId){

            db.collection('channels').doc(channelId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>(

                setMessage(snapshot.docs.map((doc)=>doc.data()))
            ))
        }
    
        

    },[channelId]);

    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('channels').doc(channelId).collection("messages").add({
            message:input,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("")
    }

    return (
        <div className="chat">
            <Chatheader channelName={channelName}/>
            <div className="chat_message">
                {message.map((message)=>(
                     <Message
                     
                     timestamp={message.timestamp}
                     message={message.message}
                     user={message.user}
                     
                     />
                )
                    
                )}
             
            </div>
            <div className="chat_input">
          <AddCircleIcon fontSize="large" />
          <form>
              <input onClick={sendMessage} value={input} disabled={!channelId} onChange={e=>setInput(e.target.value)} placeholder={`Messege #${channelName}`}/>
              <button disabled={!channelId} className="chat_inputbtn" type="submit">send messege</button> 
          </form>
          <div className="chat_inputicon">
         <CardGiftcardIcon fontSize="large" />
         <GifIcon fontSize="large" />
         <EmojiEmotionsIcon fontSize="large"   />
          </div>
            </div>
        </div>
    )
}

export default Chat
