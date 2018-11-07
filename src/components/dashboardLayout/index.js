import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import DashboardMenu from '../dashboardMenu';

export default class DashboardLayout extends Component {
    render() {
        return (
            <Grid columns='equal' padded="vertically" relaxed style={{ height: '100%' }}>
                <Grid.Column style={{paddingRight: 0}} >
                    <Container fluid textAlign="center">
                        <DashboardMenu />
                    </Container>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Container fluid>
                        {this.props.children}
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}
