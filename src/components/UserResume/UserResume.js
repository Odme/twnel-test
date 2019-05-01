import React from 'react';

import { Row, Col, Image, CardDeck, Card } from "react-bootstrap";

const userResume = (props) => (
  <Row>
    <Col lg="3" md="3" sm="12" xs="12" className="mt-2">
      <div className="form-pp-container mx-auto">
        <Image className="profile-picture" src={ props.userData.image !== '' ? props.userData.image : props.defaultImage} roundedCircle thumbnail />
      </div>
    </Col>
    <Col lg="9" md="9" sm="12" xs="12" className="mt-2">
      <CardDeck>
        <Card border="secondary">
          <Card.Body>
            <Card.Title className="font-weight-bold">{props.userData.firstname} {props.userData.lastname}</Card.Title>
            <Row>
              <Col xs="12" sm="12" md="3" lg="3" className="font-weight-bold">Phone:</Col>
              <Col xs="12" sm="12" md="9" lg="9">{props.userData.phone}</Col>
            </Row>
            <Row className="mt-2">
              <Col xs="12" sm="12" md="3" lg="3" className="font-weight-bold">About Me!:</Col>
              <Col xs="12" sm="12" md="9" lg="9">{props.userData.aboutMyself}</Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">My Favorite Avenger: <span className="font-weight-bold">{props.userData.favoriteAvenger}</span></small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Col>
  </Row>
);

export default userResume;