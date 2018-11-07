import React, {Component} from 'react';
import logo from './react.svg';
import { Header, Container } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as='h2' image={logo} content='Welcome to Accountant.in.ua' />
        
        TBD: Homepage
      </Container>
    );
  }
}

export default Home;
