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
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            className="google"/>
            <video src="/videos/background.mp4" autoPlay loop muted type="video/mp4" className="bg" />
        </>
        )}
      </div>
    )
  }
}

export default Application
