// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')
  const inputValue = React.useRef()
  const handleSubmit = e => {
    e.preventDefault()

    onSubmitUsername(e.target.elements.username.value)
    // onSubmitUsername(inputValue.current.value)
  }
  const handleChange = e => {
    const isValid = e.target.value === e.target.value.toLowerCase()
    if (e.target.value.length) {
      if (!isValid) {
        setError('Username must be a lower case')
      } else {
        setError('')
      }
    } else {
      setError('Username should not be empty')
    }
    console.log(error.length, isValid)
  }
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          ref={inputValue}
          id="username"
          name="username"
          type="text"
        />
        {error.length > 0 && <p style={{color: 'red'}}>{error}</p>}
      </div>
      <button disabled={error.length !== 0} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
