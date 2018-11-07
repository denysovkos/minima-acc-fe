import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default class ControlButtons extends Component {
    render() {
        return (
            <Fragment>
            <Link to='/login'>
                <Button inverted={!this.props.fixed} basic={this.props.fixed} color='green' >
                        Log in
                </Button>
            </Link>

            <Link to='/register'>
                <Button 
                    inverted={!this.props.fixed}
                    color='green' 
                    basic={this.props.fixed} style={{ marginLeft: '0.5em' }}>
                        Sign Up
                </Button>
            </Link>
            </Fragment>
        )
    }
}
