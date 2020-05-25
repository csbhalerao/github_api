import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js'
import React, { Component } from 'react'
import GitHubProfileComponent from '../component/github_profile.js';
import thunk from 'redux-thunk';

class GithubProfileContainer extends Component {
    render() {
        return (
            <div>
                <GitHubProfileComponent handleClick = {this.props.loadProfile} profileData = {this.props.profileData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators)(GithubProfileContainer)