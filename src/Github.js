import React, { Component } from 'react'
import './Github.css'

class Github extends Component {
    state = {
        username: ''
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    } 

    render() {
        return(
            <div className="github">
                <img className="github-logo"src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github"/>
                <form>
                    <div>
                        <input 
                        type="text" 
                        value={this.state.username}
                        onChange={(ev) => {this.handleChange}}/>
                    </div>
                    <div>
                        <button type='submit'>Look up other user</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Github