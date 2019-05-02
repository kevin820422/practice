import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  handleClick = value => this.setState({ total: this.state.total + value })

  handleClick2 = value => () =>
    this.setState({ total: this.state.total + value })

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={this.handleClick2(1)}>+1</button>
        <button onClick={this.handleClick2(-1)}>-1</button>
      </>
    )
  }
}

export default App
