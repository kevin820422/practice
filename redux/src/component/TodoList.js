import React from 'react'
import { connect } from 'react-redux'
import TodoDeleteButton from './TodoDeleteButton'

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(item => (
        <li key={item.id}>
          {item.text}
          <TodoDeleteButton itemid={item.id} />
        </li>
      ))}
    </ul>
  )
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ todos: store.todos })

export default connect(mapStateToProps)(TodoList)
