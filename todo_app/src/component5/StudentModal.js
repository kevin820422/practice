import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  ButtonGroup,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from 'react-bootstrap'

const StudentModal = props => (
  <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>學生資料 編輯/新增</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">學號</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">姓名</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">生日</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        關閉
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        儲存
      </Button>
    </Modal.Footer>
  </Modal>
)

export default StudentModal
