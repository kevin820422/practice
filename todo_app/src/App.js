import React from 'react'
import TodoApp from './component/TodoApp'
import ClockApp from './component2/ClockApp'
import CounterApp from './component3/CounterApp'
import BootstraTest from './component4/BootstrapTest'
import StudentManager from './component5/manager(usingFetch)'
import RouterTest from './component6/RouterTest'

class App extends React.Component {
  //類別建構
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <RouterTest />
        {/* <StudentManager /> */}
        {/* <BootstraTest />
        <CounterApp />
        <hr />
        <TodoApp /> */}
      </>
    )
  }
}

export default App
