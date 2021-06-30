import *as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {

    if(!this.props.isAuth) {
      return <Redirect to={'/login'}/>
   }

    return (
      <div >
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let WithRouterContainerComponents = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithRouterContainerComponents);