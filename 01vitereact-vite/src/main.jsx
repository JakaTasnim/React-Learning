import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <h1>Custom App || JAka</h1>
    </>
  )
}
// const ReactElement  = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: 'blank'
//   },
//   children: 'Click me to visit google'
// }

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google'
)

// const anotherElement = (
//   <a href = "https://google.com" target = '_blank'>visit google</a>
// )

createRoot(document.getElementById('root')).render(
  <>
  ReactElement
  </>
)
