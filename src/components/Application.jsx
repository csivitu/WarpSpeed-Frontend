import React, { Component } from 'react'
import firebase from '../firebase'
import Actualplay from './AfterLogin'
import './buttons.css' 
import { ImGoogle } from 'react-icons/im'
import { login } from "../api/Request"

const axios = require('axios').default;

var provider = new firebase.auth.GoogleAuthProvider();

const SignInGoogle = () =>{
  firebase.auth().signInWithPopup(provider).then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}
export class Application extends Component {
  state={
    isLogIn:false,
  }
  
    componentDidMount = () => {      
      firebase.auth().onAuthStateChanged(user =>{
        this.setState({
          isLogIn: !!user
        })
        if (user){
          firebase.auth().currentUser.getIdToken(true).then( async function(idToken){
            await login(user.email,user.displayName)
          }).catch(function(error) {
            console.log(error)
          
          });
        }
      })
    }
  
  render() {
    return (
      <div>
        {this.state.isLogIn ? ( 
        <>
        <Actualplay/>
        </>
        ):
        (<>
        <div className="signupcontainer">
          <div className="signup">
            <h2> &nbsp;sign up</h2>
              <div className="signup-button">
              <button  className="buttons" onClick={SignInGoogle}> 
                  <div className="insidebutton">
                  <div className="googlebuttoninside">
                    <ImGoogle />
                    </div>
                    <div>
                    Sign in with Google!
                    </div> 
                  </div>
              </button>
              </div>
            </div>
          </div>
            <video src="/videos/homepage.mp4" autoPlay loop muted type="video/mp4" className="bg" />
        </>
        )}
      </div>
    )
  }
}

export default Application
