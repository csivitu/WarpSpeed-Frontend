import React, { Component } from "react";
import firebase from "../../firebase";
import "../buttons.css";
import { ImGoogle } from "react-icons/im";
import { login } from "../../api/Request";
import { Link } from 'react-router-dom';
import { logout } from '../../api/Request';

const provider = new firebase.auth.GoogleAuthProvider();

const SignInGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};
async function signout() {
  firebase.auth().signOut();
  await logout();
}
export class Play extends Component {
  state = {
    isLogIn: false,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isLogIn: !!user,
      });
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(async function (idToken) {
            await login(user.email, user.displayName);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.isLogIn ? (
          <div>
            <div className="container">
              <div className="afterlogin">
                <ul>
                  <li>
                    <Link to="/Game">
                      <button className="buttons">Start</button>
                    </Link>{" "}
                  </li>
                  <br></br>
                  <li>
                    <button className="buttons" onClick={signout}>
                      Sign out
                    </button>{" "}
                  </li>
                </ul>
              </div>
              <video
                src="/videos/loginpage.mp4"
                autoPlay
                loop
                muted
                type="video/mp4"
                className="bg"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="signupcontainer">
              <div className="signup">
                <h2> &nbsp;sign up</h2>
                <div className="signup-button">
                  <button className="buttons" onClick={SignInGoogle}>
                    <div className="insidebutton">
                      <div className="googlebuttoninside">
                        <ImGoogle />
                      </div>
                      <div>Sign in with Google!</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <video
              src="/videos/homepage.mp4"
              autoPlay
              loop
              muted
              type="video/mp4"
              className="bg"
            />
          </>
        )}
      </div>
    );
  }
}

export default Play;
