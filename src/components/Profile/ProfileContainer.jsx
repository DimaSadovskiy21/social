import *as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    profileAPI.getProfile(userId)
            .then(response => {
              this.props.setUserProfile(response.data)  
            });
  }

  render() {
    return (
      <div >
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let WithRouterContainerComponents = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterContainerComponents);