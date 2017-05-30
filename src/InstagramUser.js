import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class InstagramUser extends Component {
    constructor(props) {
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData(props) {
        window.location.assign('https://accounts.spotify.com/authorize?client_id=b730898765ab4f7cb3f65b947e4572ec&redirect_uri=http:%2F%2Flocalhost:3000/instagram&scope=user-read-private%20user-read-email&response_type=token')
    }
    render() {
        return(
            <div>
            <h1>User</h1>
            <Route exact path='/instgram#' render={({ match }) => <h3>Please enter a username to search on Spotify</h3>} />
            </div>
        )
    }
}

export default InstagramUser