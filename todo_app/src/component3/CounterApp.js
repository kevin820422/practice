import React from 'react'

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      loading: false,
    }
  }

  // 元件 "已經" 呈現在網頁上
  async componentDidMount() {
    // try/catch錯誤處理結合await/async  (await需要在async函式的子層)
    try {
      await this.setState({ loading: true })
      const response = await fetch('http://localhost:5555/counter/1', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const jsonObject = await response.json()

      await this.setState({ total: jsonObject.total })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }), 1 * 1000)
    }
  }

  // 元件 "即將" 卸載出網頁
  componentWillUnmount() {
    //clearInterval(this.timerID)
  }

  handleClick = value => () => {
    const data = { total: this.state.total + value }
    fetch('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        //ok 代表狀態碼在範圍 200‐299
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then(jsonObject => {
        console.log(jsonObject)
        this.setState(data)
      })
      .catch(function(err) {
        // Error :(
      })
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-spinner fa-spin" />
            資料載入中
          </div>
        ) : (
          <>
            <h1>{this.state.total}</h1>
            <button onClick={this.handleClick(1)}>+1</button>
            <button onClick={this.handleClick(-1)}>-1</button>
          </>
        )}
      </>
    )
  }
}

export default CounterApp
