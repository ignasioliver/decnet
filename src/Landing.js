import React, { Component } from 'react'
import { UserSession } from 'blockstack'
import { appConfig } from './constants'
import './Landing.css'

class Landing extends Component {

  constructor() {
    super()
    this.userSession = new UserSession({ appConfig })
  }

  signIn(e) {
    e.preventDefault()
    this.userSession.redirectToSignIn()
    // If the user is not logged into Blockstack -> 'Create your Blockstack ID'
    // If the user is already logged into Blockstack -> 'Select an ID'
    // IMPORTANT: signing by an ID is the means by which the user grants the DApp access (can read/wrtie user data for the app)
  }

  render() {
    return (
      <div className="Landing">
        <div className="form-signin">
          <h1 className="h1 mb-3 font-weight-normal">Animal Kingdom</h1>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.signIn.bind(this)}>Sign in with Blockstack
          </button>
        </div>
      </div>
    );
  }
}

export default Landing
