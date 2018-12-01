import React, { Component } from 'react';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { signOutAction } from '../../store/actions/user';

class SignOut extends Component {
    componentDidMount() {
        setTimeout(() => this.props.signOutAction(this.props.history.push), 500);
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Dimmer active inverted>
                    <Loader size='massive'>Виходимо ...</Loader>
                </Dimmer>
            </Grid>
        )
    }
}
  
export default connect(
    () => {},
    { signOutAction }
)(SignOut);
