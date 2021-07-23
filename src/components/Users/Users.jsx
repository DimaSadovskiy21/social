import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';

let Users = React.memo((props) => {
   
    return <div >
        <Paginator page={props.page} count={props.count} onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        {
            props.users.map((u) => <User isFollowing={props.isFollowing} unfollow={props.unfollow} follow={props.follow} u={u} key={u.id} />)
        }
    </div>
})

export default Users;