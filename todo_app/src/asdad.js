import React from 'react'
import TodoItem from './component/TodoItem'
import TodoInput from './component/TodoInput'
import TodoInputTwo from './component/TodoInputTwo'
import TodoInputThree from './component/TodoInputThree'

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

  handleChangeTwo = text => this.setState({ inputText: text })

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

      return false
    })

    newItems[index].isCompleted = !newItems[index].isCompleted
    this.setState({ items: newItems })
  }

  handleDeleteClick = id => () => {
    const newItems = this.state.items.filter(element => {
      return element.id !== id
    })

    this.setState({ items: newItems })
  }

  render() {
    return (
      <>
        <TodoInput
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <ul>
          {this.state.items.map((element, index) => (
            <TodoItem
              key={element.id}
              clickMethod={this.handleCompletedClick(element.id)}
              deleteMethod={this.handleDeleteClick(element.id)}
              text={element.text}
              isDel={element.isCompleted}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default App