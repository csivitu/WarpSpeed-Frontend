import React, { Component } from 'react'
import firebase from '../firebase'
import Actualplay from './AfterLogin'
import './buttons.css' 
import { ImGoogle } from 'react-icons/im'

var provider = new firebase.auth.GoogleAuthProvider();

const SignInGoogle = () =>{
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
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
          firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            console.log(user.email)
            console.log(idToken)
            // Send token to your backend via HTTPS
            // ...
          }).catch(function(error) {
            console.log(error)
            // Handle error
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
