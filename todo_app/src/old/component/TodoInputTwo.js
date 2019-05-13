import React from 'react'

const TodoInputTwo = props => {
  let textField = null
  return (
    <input
      type="text"
      ref={el => (textField = el)}
      onChange={event => {
        if (textField.value.trim()) {
          props.onChange(textField)
        }
      }}
      onKeyPress={event => {
        props.onKeyPress(event)
        if (event.target.value && event.key === 'Enter') {
          textField.value = ''
        }
      }}
    />
  )
}

export default TodoInputTwo
