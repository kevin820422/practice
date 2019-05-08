import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {FaReact} from 'react-icons/fa'

const BootstrapTest = props => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>React Bootstrap</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="primary">
            <FaReact /> React v16
          </Button>
        </Col>
      </Row>
    </Container>
  </>
)

export default BootstrapTest
