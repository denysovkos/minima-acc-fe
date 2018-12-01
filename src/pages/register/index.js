import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { registerNewUserAction } from '../../store/actions/user';

class RegisterPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    render() {
        const { regFlow = {
            message: '',
            status: ''
        } } = this.props;
        const {message, status = 'ok'} = regFlow;

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
                    Зареєструвати новий обліковий запис
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
                      fluid icon='user' iconPosition='left' 
                      placeholder="Ім'я"
                      onChange={this.handleChange}
                      name='firstName'
                      />
                      <Form.Input 
                      fluid icon='user' iconPosition='left' 
                      placeholder='По-батькові' 
                      onChange={this.handleChange}
                      name='lastName'
                      />
                      <Form.Input 
                      fluid icon='phone' iconPosition='left' 
                      placeholder='Телефон' 
                      onChange={this.handleChange}
                      name='phone'
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
                        onClick={() => this.props.registerNewUserAction(this.state)}
                        >
                      Зареєструватися
                    </Button>
                    {message && 
                        <Message color={status === 'ok' ? 'green' : 'red'}>
                            {message}
                        </Message>
                    }
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        regFlow: state.user.regFlow
    };
  };
  
  const mapDispatchToProps = { registerNewUserAction };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPage);