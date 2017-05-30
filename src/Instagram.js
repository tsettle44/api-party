import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Instagram.css'

class Instagram extends Component {
    render() {
        return(
            <div className="instagram">
                <img className="instagram-logo"src="https://static.wixstatic.com/media/c5ea1b_90fc60e229944c51a89836eaefcc0373.png" alt="instgram"/>
                <form>
                    <div>
                        <input 
                        type="text" 
                        value=''/>
                    </div>
                    <div>
                        <button type='submit'>Look up instagram user</button>
                    </div>
                </form>

                <Route exact path='/instgram'render={({ match }) => <h3>Please enter a username to search on Github</h3>}/>
                {/*<Route path='/instgram/:username' component={InstagramUser} /> */}
            </div>
        )
    }
}

export default Instagram