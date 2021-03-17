import React, { Component } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase'
import Actualplay from './AfterLogin'
import './buttons.css'

export class Application extends Component {
  state={
    isLogIn:false,
  }

  uiConfig={
    signInFlow: "popup",
    signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks:{
      signInSuccess:()=>false}
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user =>{
        this.setState({
          isLogIn: !!user
        })
        if (user){
          firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
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
        <div className="signup">
          <h2>sign up</h2>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
            
            <video src="/videos/homepage.mp4" autoPlay loop muted type="video/mp4" className="bg" />
            
        </>
        )}
      </div>
    )
  }
}

export default Application
