import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.page / props.count);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div className={s.user}>
        <div className={s.pageNumber}>
            {pages.map(p => {
                return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}

        </div>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    
                    <div >
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.photo} src={u.photos.large != null ? u.photos.large : userPhoto} />
                    </NavLink>
                    </div>
                    <div>
                        {u.followed 
                        ? <button disabled={props.isFollowing.some(id => id === u.id)} 
                        onClick={() => {props.unfollow(u.id) }}>unfollow</button> 
                        : <button disabled={props.isFollowing.some(id => id === u.id)} 
                        onClick={() => {props.follow(u.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>
                        <b>Name: </b> {u.name}
                    </div>
                    <div>
                        <b>Status: </b>{u.status}
                    </div>
                </span>
            </div>)
        }
    </div>
}

export default Users;