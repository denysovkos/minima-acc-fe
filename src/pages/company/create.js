import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import withRouter from 'react-router-dom/withRouter';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { addCompany } from '../../store/actions/company';

class CompanyCreation extends Component {
    state = {
        "companyName": "",
        "type": "PE",
        "inn": "",
        "address": "",
        "phone": "",
        "ceo": "",
        "accountant": "",
    }

    
    componentDidMount() {
        if (this.props.company && this.props.company.length) {
            this.props.location.push('/company/edit');
        }
    }
    

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    render() {
        const { message } = this.props.company;
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
                    Створення нового підприємства
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input 
                      fluid icon='address card outline' iconPosition='left' 
                      placeholder='Назва підприємства' 
                      onChange={this.handleChange}
                      name='companyName'
                      />
                      <Form.Input 
                      fluid icon='user' iconPosition='left' 
                      placeholder="Тип"
                      disabled
                      value="PE"
                      onChange={this.handleChange}
                      name='firstName'
                      />
                      <Message info>
                            На даний момент сервіс правцює виклочно для ФОП
                        </Message>
                      <Form.Input 
                      fluid icon='barcode' iconPosition='left' 
                      placeholder="Код платника податків"
                      onChange={this.handleChange}
                      name='inn'
                      />
                      <Form.Input 
                      fluid icon='building outline' iconPosition='left' 
                      placeholder='Адреса' 
                      onChange={this.handleChange}
                      name='address'
                      />
                      <Form.Input 
                      fluid icon='phone' iconPosition='left' 
                      placeholder='Телефон' 
                      onChange={this.handleChange}
                      name='phone'
                      />
                    <Form.Input
                      fluid
                      icon='user' iconPosition='left'
                      placeholder='Керівник'
                      name='ceo'
                      onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        icon='user' iconPosition='left'
                        placeholder='Бухгалтер'
                        name='accountant'
                        onChange={this.handleChange}
                    />
                    <Button color='teal' 
                        fluid size='large'
                        onClick={() => this.props.addCompany(this.props.user.user, this.state, this.props.history.push)}
                        >
                      Створити
                    </Button>
                    {message && 
                        <Message error>
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
      user: state.user,
      company: state.company
    };
  };
  
const mapDispatchToProps = { addCompany };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CompanyCreation));