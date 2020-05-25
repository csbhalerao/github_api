import React, { Component } from 'react';

class GitHubProfile extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> {this.props.handleClick()}}>Get Profile</button>
                <h1>Hello, I am {this.props.profileData.name}</h1>
                <h2>{this.props.profileData.bio}</h2>
            </div>
        )
    }
}

export default GitHubProfile
