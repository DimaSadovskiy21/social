import s from './ProfileInfo.module.css';
import Loading from './../../../common/Loading/Loading'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg';
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Loading />
    }

    const onChangeMainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )     
    }



    return (
        <div>
            <img className={s.content__img} src="https://c.wallhere.com/photos/2f/d7/mountain_lake_beautiful_night-1018189.jpg!d" />
            <div className={s.profile__info}>
                <img className={s.MainPhoto} src={props.profile.photos.large || userPhoto} />
                {props.isOwner && <input type={"file"} onChange={onChangeMainPhoto} />}
                <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateUserStatus={props.updateUserStatus} />
                {editMode 
             ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
             : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
            </div>

        </div>
    )
}


const ProfileData = (props) => {
    return <div>
       <div>{props.isOwner && <button onClick={props.goToEditMode}>edit</button>}</div>
        <div>
            <b>Full name: </b> {props.profile.fullName}
        </div>
        <div>
            <b>About me: </b> {props.profile.aboutMe}
        </div>
        <div>
            <b>My skills: </b> {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValye={props.profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contacts = ({ contactTitle, contactValye }) => {
    return <div>
        <b>{contactTitle}: </b> <a href={contactValye}>{contactValye}</a>
    </div>
}

export default ProfileInfo;