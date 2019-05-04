import React from 'react'
import TodoItem from './component/TodoItem'
import TodoInput from './component/TodoInput'
import TodoInputTwo from './component/TodoInputTwo'
import TodoInputThree from './component/TodoInputThree'

class App extends React.Component {
  //類別建構
  constructor() {
    super()
    //設定初始狀態
    this.state = {
      inputText: '',
      items: [{ id: 123456, text: 'buy milk', isCompleted: false }],
    }
  }
  //event.target是指事件產生的對象，此處為input，故可用.value取得輸入欄得值
  handleChange = event => this.setState({ inputText: event.target.value })

  handleChangeTwo = text => this.setState({ inputText: text })

  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
      // const newItems = [...this.state.items] //...複製一個新的
      // newItems.unshift(event.target.value)
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        isCompleted: false,
      }
      const newItems = [newItem, ...this.state.items] //不能直接修改state,要複製一個新的
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
        {/* <TodoInputTwo
          value={this.state.inputText}
          onChange={this.handleChangeTwo}
          onKeyPress={this.handleKeyPress}
        /> */}
        {/* <TodoInputThree onKeyPress={this.handleKeyPress} /> */}
        <ul>
          {/* map遍歷,類似迴圈 */}
          {this.state.items.map((element, index) => (
            <TodoItem //傳入props
              key={element.id} //當有很多一樣的子層元素時，須設定key值，ex:table>tr>td ||ul>li
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
