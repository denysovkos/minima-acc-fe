import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlButtons from './ControlButtons';
import UserMenu from './UserMenu';

class LoginControlOrUserMenu extends Component {
    render() {
        const {user = {}} = this.props;

        return user.token && user.email ? <UserMenu user={user} /> : <ControlButtons />
    }
}

const mapStateToProps = (state) => state.user;
  
  export default connect(
    mapStateToProps,
  )(LoginControlOrUserMenu);