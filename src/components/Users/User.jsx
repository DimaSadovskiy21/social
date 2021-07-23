import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

let User = (props) => {
   
    return (
            <div className={s.user}>
                <span >
                    
                    <div >
                    <NavLink to={'/profile/' + props.u.id}>
                        <img className={s.photo} src={props.u.photos.large != null ? props.u.photos.large : userPhoto} />
                    </NavLink>
                    </div>
                    <div>
                        {props.u.followed 
                        ? <button disabled={props.isFollowing.some(id => id === props.u.id)} 
                        onClick={() => {props.unfollow(props.u.id) }}>unfollow</button> 
                        : <button disabled={props.isFollowing.some(id => id === props.u.id)} 
                        onClick={() => {props.follow(props.u.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>
                        <b>Name: </b> {props.u.name}
                    </div>
                    <div>
                        <b>Status: </b>{props.u.status}
                    </div>
                </span>
            </div>)
}
export default User;