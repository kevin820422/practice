import React from 'react'

class TodoInputThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  handleChange(event) {
    return this.setState({ text: event.target.value })
  }
  handleKeyPress = event => {
    this.props.onKeyPress(event)
    if (event.target.value && event.key === 'Enter') {
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChangeTwo}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

export default TodoInputThree
