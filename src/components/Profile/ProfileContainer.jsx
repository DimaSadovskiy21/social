import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const ProfileContainer = (props) => {

  // componentDidMount() {
  //   let userId = this.props.match.params.userId;
  //   if (!userId) {
  //     userId = this.props.autorizedUserId;
  //     if(!userId) {
  //       this.props.history.push("/login")
  //     }
  //   }
  //   this.props.getUserProfile(userId)
  //   this.props.getUserStatus(userId)
  // }

  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.autorizedUserId;
      if(!userId) {
        props.history.push("/login")
      }
    }
    props.getUserProfile(userId)
    props.getUserStatus(userId)
  })
 

    return (
      <div >
        <Profile {...props} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
)(ProfileContainer)
