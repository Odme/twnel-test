import React, { Component } from 'react';

import { Row, Col, Form, Button, Container, Image } from 'react-bootstrap';
import './UserForm.css';

class UserForm extends Component {

  state = {
    userData: {
      ...this.props.userData
    },
    defaultImage: this.props.defaultImage
  }

  handleImageClick = (e) => {
    this.inputElement.click();
  }

  handleImageChange = (e) => {
    if (this.state.image) {
      this.setState({
        ...this.state,
        userData: {
          ...this.state.userData,
          image: URL.revokeObjectURL(this.state.userData.image)
        }
      });
    }
    this.setState({
      ...this.state,
      userData: {
        ...this.state.userData,
        image: URL.createObjectURL(e.target.files[0])
      }
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.saveAction(this.state.userData);
    this.props.cancelAction();
  }

  handleFieldChange = (e) => {
    this.setState({
      ...this.state,
      userData: {
        ...this.state.userData,
        [e.target.id]: e.target.value
      }
    });
  }

  render() {
    const userData = {
      ...this.state.userData
    }
    return (
      <Row className="user-form-layout">
        <Col>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Group controlId="image">
              <Col>
                <div className="form-pp-container mx-auto mt-2" onClick={this.handleImageClick}>
                  <Image className="profile-picture" src={ userData.image !== '' ? userData.image : this.state.defaultImage} roundedCircle thumbnail />
                  <Form.Control className="d-none" type="file" ref={input => this.inputElement = input} accept="image/*" onChange={this.handleImageChange}/>
                </div>
              </Col>
            </Form.Group>
            <Form.Group controlId="firstname">
              <Form.Label>Firstname:</Form.Label>
              <Form.Control type="text" placeholder="Type your firstname" value={userData.firstname} onChange={this.handleFieldChange} required/>
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Lastname:</Form.Label>
              <Form.Control type="text" placeholder="Type your lastname" value={userData.lastname} onChange={this.handleFieldChange} required/>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="text" placeholder="Type your phone number" value={userData.phone} onChange={this.handleFieldChange} required/>
            </Form.Group>
            <Form.Group controlId="aboutMyself">
              <Form.Label>Write about you:</Form.Label>
              <Form.Control className="no-resize" as="textarea" rows="3" value={userData.aboutMyself} onChange={this.handleFieldChange} />
            </Form.Group>
            <Form.Group controlId="favoriteAvenger">
              <Form.Label>What's your favorite Avenger?:</Form.Label>
              <Form.Control type="text" placeholder="Type your favorite avenger name" value={userData.favoriteAvenger} onChange={this.handleFieldChange} required/>
            </Form.Group>
            <div className="footer">
              <Container>
                <Col xs="6" sm="6" md="6" lg="3" className={this.props.initialSetup ? "float-right d-none" : "float-right"}>
                  <Button variant="danger" size="lg" onClick={this.props.cancelAction} block>
                    Cancel
                  </Button>
                </Col>
                <Col xs="6" sm="6" md="6" lg="3" className="float-right">
                  <Button variant="success" type="submit" size="lg" block>
                    Save
                  </Button>
                </Col>
              </Container>
            </div>
          </Form>
        </Col>
      </Row>
    )
  }
};

export default UserForm;