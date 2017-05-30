import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import InstagramUser from './InstagramUser'
import './Instagram.css'

class Instagram extends Component {
    constructor(props) {
        super(props)
        this.Token(props)
    }
    state = {
            username: ''
    }

    Token = (props) => {
        const token = props.location.hash
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        window.location.assign('https://accounts.spotify.com/authorize?client_id=b730898765ab4f7cb3f65b947e4572ec&redirect_uri=http:%2F%2Flocalhost:3000/instagram&scope=user-read-private%20user-read-email&response_type=token')
    }

    render() {
        return(
            <div className="instagram">
                <img className="instagram-logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2000px-Spotify_logo_with_text.svg.png" alt="Spotify"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <button type='submit'>Log in to Spotify</button>
                    </div>
                </form>

                <Route exact path='/instgram'render={({ match }) => <h3>Please enter a username to search on Spotify</h3>}/>
                <Route path='/instagram/:username' component={InstagramUser} /> 
            </div>
        )
    }
}

export default Instagram