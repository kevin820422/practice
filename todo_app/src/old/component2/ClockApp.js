import React from 'react'

class ClockApp extends React.Component {
  constructor() {
    super()
    this.state = {
      time: new Date().toLocaleTimeString(),
    }
  }
  // 元件 "已經" 呈現在網頁上
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  // 元件 "即將" 卸載出網頁
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(
      {
        time: new Date().toLocaleTimeString(),
      },
      () => {
        // 在這地方執行，才能確保得到setState設定好time的值
        document.title = new Date().toLocaleTimeString()
      }
    )
  }
  render() {
    return <>Time:{this.state.time}</>
  }
}

export default ClockApp
