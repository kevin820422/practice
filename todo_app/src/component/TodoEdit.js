import React from 'react'

const TodoEdit = props => (
  <li>
    <input
      type="text"
      value={props.text}
      onChange={props.onChange}
      onBlur={props.saveMethod} //失焦自動儲存
      autoFocus //自動對焦
    />
    <button onClick={props.saveMethod}>儲存</button>
  </li>
)

export default TodoEdit
