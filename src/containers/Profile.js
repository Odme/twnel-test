import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

import UserForm from '../components/UserForm/UserForm';
import UserResume from '../components/UserResume/UserResume';

import { Container } from 'react-bootstrap';

class Counter extends Component {
  render() {
    return (
      <Container>
        <UserForm/>
        <UserResume/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    usr: state.usr
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);