import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='http://google.com'>
    visit google
  </a>
)

const anotherSEcondAElement = "Jay Mahadev"

const reactElement = React.createElement(
  'a',                                                 //tag
  {href: 'https://google.com', target: '_blank'},     //object parameter
  'click me to visit google',                       //direct text
  anotherSEcondAElement
)




ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <App />
  </React.StrictMode>,


  // reactElement
)
