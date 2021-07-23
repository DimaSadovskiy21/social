import s from './ProfileInfo.module.css';
import Loading from './../../../common/Loading/Loading'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loading />
    }

    return (
        <div>
            <img className={s.content__img} src="https://c.wallhere.com/photos/2f/d7/mountain_lake_beautiful_night-1018189.jpg!d" />
            <div className={s.profile__info}>
                <img src={props.profile.photos.large} />
                <div>
                    {props.profile.fullName} <br/>
                    {props.profile.contacts.github}
                   <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;