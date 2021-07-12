import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Users from './Users';
import Loading from '../../common/Loading/Loading';
import { compose } from 'redux';
import { getCount, getCurrentPage, getIsFetching, getIsFollowing, getPage, getUser } from '../../redux/users-selectors';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.count);
    }



    render() {
        return <> 
        {this.props.isFetching 
        ? <Loading/> 
        : <Users users={this.props.users} page={this.props.page} count={this.props.count} 
        onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} unfollow={this.props.unfollow} 
        follow={this.props.follow} isFollowing={this.props.isFollowing} toggleIsFollowing={this.props.toggleIsFollowing}/>}
        </>
    }

}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         count: state.usersPage.count,
//         page: state.usersPage.page,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing,
//     }
// }
 

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        count: getCount(state),
        page: getPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
)(UsersContainer)