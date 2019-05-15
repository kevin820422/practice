import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, delTodo } from '../action'
import { ADD_TODO, DEL_TODO } from './../action/actionType'
// import * as actionCreators from '../action'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = { value: '' }
  }
  handleChange = event => this.setState({ value: event.target.value })

  handleClick = event => {
    const text = this.state.value
    const id = +new Date()
    const payload = {
      id: id,
      text: text,
    }
    const action = {
      type: 'ADD_TODO',
      payload,
    }
    //第1種，自動綁定dispatch
    // this.props.dispatch(action)

    //第2種，全綁定action creator
    this.props.addTodo(payload)

    //clean text input
    this.setState({ value: '' })
  }
  handleDelClick = id => () => {
    const payload = { id }
    this.props.delTodo(payload)
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.props.todos.map(item => (
            <li key={item.id}>
              {item.text}{' '}
              <button onClick={this.handleDelClick(item.id)}>刪除</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ todos: store.todos })

// 第1種: redux(state)綁定到此元件的props、dispatch方法自動綁定到此元件的props
//export default connect(mapStateToProps)(TodoApp)

//第2種，: redux(state)綁定到此元件的props、全綁定action creator
// export default connect(
//   mapStateToProps,
//   actionCreators
// )(TodoApp)

// 第3種，: redux(state)綁定到此元件的props、部份綁定action creator
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, delTodo }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
