import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Users from './Users';
import Loading from '../../common/Loading/Loading';
import { compose } from 'redux';
import { getCount, getCurrentPage, getIsFetching, getIsFollowing, getPage, getUser } from '../../redux/users-selectors';



const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.count);
    }, [props.currentPage, props.count])

    const onPageChanged = (currentPage) => {
        props.getUsers(currentPage, props.count);
    }



   
        return <div> 
        {props.isFetching ? <Loading/> : null}
        <Users users={props.users} page={props.page} count={props.count} 
        onPageChanged={onPageChanged} currentPage={props.currentPage} unfollow={props.unfollow} 
        follow={props.follow} isFollowing={props.isFollowing} toggleIsFollowing={props.toggleIsFollowing}/>}
        </div>
    

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