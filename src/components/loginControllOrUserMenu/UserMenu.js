import React, { Component } from 'react';
import userImg from './man.svg';
import { Dropdown, Image } from 'semantic-ui-react';
import withRouter from 'react-router-dom/withRouter';

class UserMenu extends Component {
    state = {
        value: null,
    }

    handleChange = (e, { value }) => {
        this.props.history.push(`/${value}`);
    }

    render() {
        console.log('PROPS IN USER MENU: ', this.props);
        const trigger = (
            <span>
              <Image avatar src={userImg} /> {this.props.user.firstName + ' ' + this.props.user.lastName}
            </span>
          )

          const options = [
            { key: 'user', text: 'Account', icon: 'user', value: 'account' },
            { key: 'settings', text: 'Settings', icon: 'settings', value: 'settings' },
            { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 'signout' },
          ];

        return(
            <Dropdown trigger={trigger} options={options}
            onChange={this.handleChange}
            pointing='top left' icon={null} />
        )
    }
}

export default withRouter(UserMenu);
