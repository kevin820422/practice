import React from 'react'
import PropTypes from 'prop-types'

const MyButton = props => {
  return <button onClick={props.clickFunc}>{props.text}</button>
}

// 指定 props 的默认值：
MyButton.defaultProps = {
  text: 'Hi 123',
}

MyButton.propTypes = {
  text: PropTypes.string,
  clickFunc: PropTypes.func,
}

export default MyButton
