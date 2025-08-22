import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

function MyApp(){
  return(
    <div>
      <h1>Custom Checking!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     target: '_blank',
//     href: 'https://www.google.com'
//   },
//   children: 'click me to visit google'
// }

const AnotherElement = (
  <a href="https://www.google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
)
