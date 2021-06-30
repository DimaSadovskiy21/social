import React from 'react';
import { connect } from 'react-redux';
import { getAuth } from './../../redux/auth-reducer';
import Header from './Header';
import s from './Header.module.css';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, { getAuth })(HeaderContainer)