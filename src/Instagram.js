import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import InstagramUser from './InstagramUser'
import './Instagram.css'

class Instagram extends Component {
    state = {
            username: ''
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/instagram/${this.state.username}`)
    }

    render() {
        return(
            <div className="instagram">
                <img className="instagram-logo"src="https://static.wixstatic.com/media/c5ea1b_90fc60e229944c51a89836eaefcc0373.png" alt="instgram"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type='submit'>Look up instagram user</button>
                    </div>
                </form>

                <Route exact path='/instgram'render={({ match }) => <h3>Please enter a username to search on Github</h3>}/>
                <Route path='/instagram/:username' component={InstagramUser} /> 
            </div>
        )
    }
}

export default Instagram