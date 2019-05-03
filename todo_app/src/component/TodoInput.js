import React from 'react'

const TodoInput = props => (
  <input
    type="text"
    value={props.value}
    onChange={props.onChange}
    onKeyPress={props.onKeyPress}
  />
)

export default TodoInput
