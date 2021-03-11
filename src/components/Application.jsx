import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Login from "./Login";
import Game from './Game'
import {login, logout, selectUser} from '../features/userslice'
import {useSelector,useDispatch} from 'react-redux';
import { auth } from "../firebase";

function Application() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
            uid:authUser.uid,
            email:authUser.email,
            displayName:authUser.displayName,
          }))
        }else{
            dispatch(logout())
        }
      })
    
  }, [dispatch])
  return (
    <div className="app">
      {user?(
        <>
        <Game />
        </>
      ):(
        <Login/>
      )}
      
      
    </div>
  );
}

export default Application;