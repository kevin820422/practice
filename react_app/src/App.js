// @flow

//導入react
import React from 'react'
//導入自訂功能
import MyButton from './component/MyButton'

type Props = {}

type State = {
  total: number,
  text: string,
  alive: boolean,
}


//組件
class App extends React.Component<Props, State> {
  //設定初始狀態
  constructor() {
    super()
    this.state = {
      //類別方法,使用this
      total: 0,
      alive: true,
    }
  }

  handleclick = value => this.setState({ total: this.state.total + value })

  handleclick2 = value => () =>
    this.setState({ total: this.state.total + value })

  handleKillme = () => this.setState({ alive: false })

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <MyButton text="+5" clickFunc={this.handleclick2(5)} />
        {this.state.alive ? (
          <MyButton text="kill me" clickFunc={this.handleKillme} />
        ) : (
          ''
        )}
        <button onClick={this.handleclick2(-1)}>-1</button>
      </>
    )
  }
}
//導出
export default App
