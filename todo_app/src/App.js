import React from 'react'
import TodoApp from './component/TodoApp'
import ClockApp from './component2/ClockApp'
import CounterApp from './component3/CounterApp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <CounterApp/>
        <hr/>
        <TodoApp />
      </>
    )
  }
}

export default App
