import React from 'react';
import { connect } from "react-redux";
import { follow, setCurrentPage,  setPage,  setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer";
import Users from './Users';
import Loading from '../../common/Loading/Loading';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.count)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setPage(response.totalCount);
            });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.count)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }



    render() {
        return <> 
        {this.props.isFetching ? <Loading/> : <Users users={this.props.users} page={this.props.page} count={this.props.count} 
        onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} />}
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
    }
}
 
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setPage, toggleIsFetching})(UsersContainer);