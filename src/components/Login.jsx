import React from 'react';
import './Login.css';
import {auth,  provider } from '../firebase'
function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    
    return (
        <div className="login">
            <button onClick={signIn}>sign in</button>
        </div>
    )
}

export default Login