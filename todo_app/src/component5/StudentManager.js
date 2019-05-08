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
import { data } from './../db/data'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import StudentModal from './StudentModal'
class StudentManager extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false, // 控制是否呈現跳出視窗(Modal)
      disableIdField: false, // 控制是否讓學號(id)欄位變為不可變更(disabled)
      studentData: [], // 學生的資料，注意應該預設值是空陣列，而不是null或空物件
      // 給跳出視窗中的表單欄位對照變動用的state
      // 預設資料應該為要處理的各種資料類型的初始值
      id: 0,
      name: null,
      birth: 0,
      // 搜尋用的字串，可控元件使用
      searchText: '',
    }
  }
  handleShow = () => this.setState({ show: true })
  handleClose = () => this.setState({ show: false })
  render() {
    return (
      <>
        <StudentModal show={this.state.show} handleClose={this.handleClose} />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>學生管理資料庫</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" onClick={this.handleShow}>
                    <FaPen />
                    新增
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl placeholder="輸入姓名進行搜尋" />
              </InputGroup>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>學號</th>
                  <th>姓名</th>
                  <th>生日</th>
                  <th>動作</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                    <td>
                      <Button variant="success">
                        編輯
                        <FaPen />
                      </Button>
                      <Button variant="danger">
                        {' '}
                        刪除
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </>
    )
  }
}
export default StudentManager
