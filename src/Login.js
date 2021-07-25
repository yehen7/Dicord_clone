import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
function Login() {

    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }



    return (
        <div className='login'>
            <div className="login_logo">
                
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1920px-Discord_logo.svg.png" alt=""/>
            </div>

            <Button className="button" onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login
