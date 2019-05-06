import React from 'react'

const TodoItem = props => (
  <li>
    {props.isDel ? <del>{props.text}</del> : props.text}
    <button onClick={props.clickMethod}>完成</button>
    <button onClick={props.deleteMethod}>刪除</button>
    <button onClick={props.editMethod}>編輯</button>
  </li>
)

export default TodoItem
