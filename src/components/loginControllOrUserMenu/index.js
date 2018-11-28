import React, { Component } from 'react';
import { connect } from "react-redux";
import withRouter from 'react-router-dom/withRouter';
import ControlButtons from './ControlButtons';
import UserMenu from './UserMenu';

class LoginControlOrUserMenu extends Component {
    componentDidMount() {
        const {user = {}} = this.props;

        if (!user.token && !user.email) {
            this.props.history.push('/login');
        }
    }
    
    render() {
        const {user = {}} = this.props;

        return user.token && user.email ? <UserMenu user={user} /> : <ControlButtons />
    }
}

const mapStateToProps = (state) => state.user;
  
  export default connect(
    mapStateToProps,
  )(withRouter(LoginControlOrUserMenu));