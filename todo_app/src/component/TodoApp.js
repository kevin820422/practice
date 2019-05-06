import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoEdit from './TodoEdit'
import TodoInputTwo from './TodoInputTwo'
import TodoInputThree from './TodoInputThree'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      // {id:number, text:string, isCompleted:boolean, isEdited:boolean}
      items: [],
      editText: '',
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:5555/items', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const newItems = []
    const jsonobj = await res.json()
    jsonobj.map((element, index) => {
      const newItem = {
        id: jsonobj[index].id,
        text: jsonobj[index].title,
        isCompleted: jsonobj[index].isCompleted,
        // isEdited: false,
      }
      newItems.push(newItem)
    })
    console.log(newItems)
    this.setState({ items: newItems })
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleEditChange = event => this.setState({ editText: event.target.value })

  // handleChangeTwo = text => this.setState({ inputText: text })

  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
      // const newItems = [...this.state.items] //...複製一個新的
      // newItems.unshift(event.target.value)
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        isCompleted: false,
        isEdited: false,
      }
      const newItems = [newItem, ...this.state.items]
      this.setState({ items: newItems, inputText: '' })
    }
  }
  handleCompletedClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].isCompleted = !newItems[index].isCompleted
    this.setState({ items: newItems })
  }

  handleEditedClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].isEdited = true
    this.setState({ items: newItems })
    this.setState({ editText: newItems[index].text })
  }
  handleSaveClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].text = this.state.editText
    newItems[index].isEdited = false
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
        {/* <TodoInputTwo
          value={this.state.inputText}
          onChange={this.handleChangeTwo}
          onKeyPress={this.handleKeyPress}
        /> */}
        {/* <TodoInputThree onKeyPress={this.handleKeyPress} /> */}
        <ul>
          {/* map遍歷,類似迴圈 */}
          {this.state.items.map((element, index) => {
            return element.isEdited ? (
              <TodoEdit
                key={element.id}
                text={this.state.editText}
                onChange={this.handleEditChange}
                saveMethod={this.handleSaveClick(element.id)}
              />
            ) : (
              <TodoItem //傳入props
                key={element.id} //當有很多一樣的子層元素時，須設定key值，ex:table>tr>td ||ul>li
                clickMethod={this.handleCompletedClick(element.id)}
                deleteMethod={this.handleDeleteClick(element.id)}
                editMethod={this.handleEditedClick(element.id)}
                text={element.text}
                isDel={element.isCompleted}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default TodoApp
