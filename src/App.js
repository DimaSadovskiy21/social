import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inisializedApp } from './redux/app-reducer'
import Loading from './common/Loading/Loading';



class App extends React.Component {

  componentDidMount() {
    this.props.inisializedApp();
  }

  render() {

    if(!this.props.inisialized) {
      return < Loading />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    inisialized: state.app.inisialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { inisializedApp })
)(App);
