import React from 'react'
import { withRouter } from 'react-router'

const PathNow = props => <div>目前位置 {props.location.pathname}</div>

export default withRouter(PathNow)
