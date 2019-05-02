App.js
Today
4:36 PM
a
anna su uploaded an item
Javascript
App.js
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      // {id:number, text:string, isCompleted:boolean}
      items: [],
    }
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
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