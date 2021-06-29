import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';
import Header from './Header';
import s from './Header.module.css';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuth()
            .then(response => { 
              if(response.data.resultCode === 0) {
                  let {id, email, login} = response.data.data;
                  this.props.setAuthUserData(id, email, login)
              } 
            });
    }

    render() {
        return (
            <div className={s.header}>
                <Header {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)