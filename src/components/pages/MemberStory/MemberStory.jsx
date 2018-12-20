import React, { Component } from 'react';
import Navigation from './../../state/Navigation/Navigation';
import MainMemberStory from '../../state/MemberStoryComp/MainMemberStory'
import './style.css'

class MemberStory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <Navigation/>
                <MainMemberStory />
            </div>
        );
    }
}

export default MemberStory;
