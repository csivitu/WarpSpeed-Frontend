import React, { Component } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase'
import Actualplay from './Actualplay'
import Game from './Game'

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
        <div><Actualplay/> </div>
        <button onClick={()=>firebase.auth().signOut()}> Sign out</button>
        </>
        ):
        (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )
        }
      </div>
    )
  }
}

export default Application
