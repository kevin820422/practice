import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      items: [{ id: 123456, text: 'buy milk', isCompleted: false }],
    }
  }
  handleChange = event => this.setState({ inputText: event.target.value })
  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
      // const newItems = [...this.state.items] //...複製一個新的
      // newItems.unshift(event.target.value)
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        isCompleted: false,
      }
      const newItems = [newItem, ...this.state.items]
      this.setState({ items: newItems, inputText: '' })
    }
  }
  handleCompletedClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => {
      if (element.id === id) return true
      else return false
    })

    if (index > -1) {
      newItems[index].isCompleted = !newItems[index].isCompleted
      this.setState({ items: newItems })
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <ul>
          {/* map遍歷,類似迴圈 */}
          {this.state.items.map((element, index) => {
            if (element.isCompleted) {
              return (
                <li
                  key={element.id}
                  onClick={this.handleCompletedClick(element.id)}
                >
                  <del>{element.text}</del>
                </li>
              )
            } else {
              return (
                <li
                  key={element.id}
                  onClick={this.handleCompletedClick(element.id)}
                >
                  {element.text}
                </li>
              )
            }
          })}
        </ul>
      </>
    )
  }
}

export default App
