import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../helpers/validate/validate';
import { login } from '../../redux/auth-reducer';
import s from './../../common/FormControls/FormControls.module.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} component={Input} placeholder={"login"} validate={[required]}/>
                </div>
                <div>
                    <Field name={'password'} component={Input} placeholder={"password"} validate={[required]} type={"password"}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={Input} type={"checkbox"}/> remember Me
                </div>
                {props.error && <div className={s.formSummuryError}>
                    {props.error}
                    </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

let LoginReduxForm  = reduxForm({
    form: 'Login'
  })(LoginForm)


let mapStateToProps = (state) => {
      return {
          isAuth: state.auth.isAuth
      }
  }

export default connect(mapStateToProps, {login})(Login);