import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

import UserForm from '../components/UserForm/UserForm';
import UserResume from '../components/UserResume/UserResume';

import { Container, Col, Button } from 'react-bootstrap';
import './Profile.css';

class Counter extends Component {

  state = {
    editUser: false
  }

  handleActiveEditClick = () => {
    this.setState({
      editUser: true
    });
  }

  handleCancelEditClick = () => {
    this.setState({
      editUser: false
    });
  }

  render() {
    return (
      <Container className="basic-layout">
      { (this.props.usr.initialSetup || this.state.editUser )
      ? <UserForm userData={this.props.usr.userData} defaultImage={this.props.usr.defaultImage} saveAction={this.props.onSaveUser} cancelAction={this.handleCancelEditClick} initialSetup={this.props.usr.initialSetup} />
      : (<div>
          <UserResume userData={this.props.usr.userData} defaultImage={this.props.usr.defaultImage}/>
          <div className="footer">
            <Container>
              <Col xs="7" sm="6" md="6" lg="3" className="float-right">
                <Button variant="primary" size="lg" onClick={this.handleActiveEditClick} block>
                  Edit Profile
                </Button>
              </Col>
            </Container>
          </div>
        </div>)
      }
        
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
    onSaveUser: (data) => dispatch({type: actionTypes.SAVE_USER, userData: data})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);