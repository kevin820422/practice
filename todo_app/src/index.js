import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import DropzoneComponent from 'react-dropzone-component'
var componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: '/uploadHandler',
}

ReactDOM.render(
  <DropzoneComponent
    config={componentConfig}
    eventHandlers={eventHandlers}
    djsConfig={djsConfig}
  />,
  document.getElementById('content')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
