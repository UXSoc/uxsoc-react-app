import React, { Component } from 'react';
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
                 <MainMemberStory />
                 
            </div> 
         );
    }
}
 
 
export default MemberStory;