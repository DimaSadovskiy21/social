import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../common/FormControls/FormControls';
import s from './../../../common/FormControls/FormControls.module.css';

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={s.formSummuryError}>
            {props.error}
        </div>}
        <button>save</button>
        <div>
            <b>Full name: </b> <Field name={"fullName"} component={Input} placeholder={"Full Name"} />
        </div>
        <div>
            <b>About me: </b> <Field name={"aboutMe"} component={Textarea} placeholder={"About me"} />
        </div>
        <div>
            <b>My skills: </b> <Field name={"lookingForAJobDescription"} component={Textarea} placeholder={"My skills"} />
        </div>
        <div>
            <b>Looking for a job: </b> <Field name={"lookingForAJob"} component={Input} type={"checkbox"} />
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}><b>{key}: </b><Field name={"contacts." + key} component={Input} placeholder={key} /> </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);

export default ProfileDataReduxForm;