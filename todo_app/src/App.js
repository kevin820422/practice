import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Home from './page/Home'
import Student from './page/Student'
import Header from './component/Header'
import Footer from './component/Footer'
import PathNow from './component/PathNow'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <div className="container bg-light" style={{}}>
            <Header />
            <PathNow />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/student/:sid" component={Student} />
              <Route path="/student/" component={Student} />
            </Switch>
            <Footer />
          </div>
        </>
      </Router>
    )
  }
}

export default App
