import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../../react.svg';
import { loginAction } from '../../store/actions/user';

class LoginPage extends Component  {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    render() {
        const {message = null} = this.props.user;
        return (
            <Fragment>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src={logo} /> Вхід
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input 
                      fluid icon='mail' iconPosition='left' 
                      placeholder='E-mail адреса' 
                      onChange={this.handleChange}
                      name='email'
                      />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Пароль'
                      type='password'
                      name='password'
                      onChange={this.handleChange}
                    />
        
                    <Button color='teal' 
                        fluid size='large'
                        onClick={() => this.props.loginAction(this.state.email, this.state.password, this.props.history.push)}
                        >
                      Вхід
                    </Button>
                    {message && <Message color='red'>{message}</Message>}
                  </Segment>
                </Form>
                <Message>
                  Не зареєстровані? <a href='/signup'>Зареєструватися!</a>
                </Message>
              </Grid.Column>
            </Grid>
          </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };
  
  const mapDispatchToProps = { loginAction };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
