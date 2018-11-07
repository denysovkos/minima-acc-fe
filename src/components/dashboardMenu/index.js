import React, { Component, Fragment } from 'react';
import withRouter from 'react-router-dom/withRouter';

import { Menu, Header } from 'semantic-ui-react'

class DashboardMenu extends Component {
    handleItemClick = (e, { value }) => {
        this.props.history.push(`/${value}`);
    }

    render() {
        const {pathname = ''} = this.props.location;

        return (
            <Fragment>
            <Header as='h3' block>Main dashboard</Header>
                <Menu pointing secondary vertical fluid>
                    <Menu.Item name='main dashboard'
                        value="dashboard"
                        active={pathname === '/dashboard'} 
                        onClick={this.handleItemClick} />
                </Menu>

                <Header as='h3' block>Documentation</Header>
                <Menu pointing secondary vertical fluid>
                    <Menu.Item name='bank statement'
                        value='docs/statement'
                        active={pathname === '/docs/statement'} 
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        value='docs/acts'
                        name='acts'
                        active={pathname === '/docs/acts'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        value='docs/agreements'
                        name='agreements'
                        active={pathname === '/docs/agreements'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='edocs'
                        value='edocs'
                        active={pathname === '/edocs'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Header as='h3' block>Employees</Header>
                <Menu pointing secondary vertical fluid>
                    <Menu.Item name='payments' 
                        value='employees/payments'
                        active={pathname === '/employees/payments'} 
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        value='employees/book'
                        name='count book'
                        active={pathname === '/employees/book'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        value='employees/table'
                        name='table'
                        active={pathname === '/employees/table'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        value='employees/list'
                        name='payment list'
                        active={pathname === '/employees/list'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Header as='h3' block>Declarations</Header>
                <Menu pointing secondary vertical fluid>
                    <Menu.Item name='PE declaration'
                        value="declarations/pe"
                        active={pathname === '/declarations/pe'} 
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='1DF'
                        value="declarations/1df"
                        active={pathname === '/declarations/1df'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Fragment>
        )
    }
}

export default withRouter(DashboardMenu);
