// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small">small lightblue box</div>
const mediumBox = <div className="box box--medium">medium pink box</div>
const largeBox = <div className="box box--large">large orange box</div>

const Box = ({size, style, children}) => (
  <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        smallBox
      </Box>
      <Box size="medium" style={{backgroundColor: 'orange'}}>
        MediumBox
      </Box>
      <Box size="large" style={{backgroundColor: 'red'}}>
        LargeBox
      </Box>
    </div>
  )
}

export default App
