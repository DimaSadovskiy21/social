import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Users from './Users';
import Loading from '../../common/Loading/Loading';



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


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        page: state.usersPage.page,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}
 
export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer);