import React from 'react'

const TodoItem = props => (
  <li onClick={props.clickMethod}>
    {props.isDel ? <del>{props.text}</del> : props.text}
    <button onClick={props.clickMethod}>完成</button>
    <button onClick={props.deleteMethod}>刪除</button>
  </li>
)

export default TodoItem
