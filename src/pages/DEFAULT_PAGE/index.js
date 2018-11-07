import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default class DEFAULT_PAGE extends Component {
    render() {
        const {pathname = ''} = this.props.location;
        return (
            <Header as='h3' block>
                <Icon name='plug' />
                {`Current module is: ${pathname}`}
            </Header>
        )
    }
}
