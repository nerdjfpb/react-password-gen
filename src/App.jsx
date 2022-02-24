import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

const App = () => {
  const [password, setPassword] = useState('**********************')

  const generatePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

    // Math.random()// Generate random number, eg: 0.123456
    //.toString(36)// Convert  to base-36 : "0.4fzyo82mvyr"
    //.slice(2);// Cut off last 8 characters : "yo82mvyr"
    // Adding 2 because the password will be bigger with this

    // set the generated password as state
    setPassword(randomPassword)

    // copy the password to the clipboard
    if (navigator.clipboard.writeText(randomPassword)) {
      toast('Password copied to your clipboard')
    }
  }

  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="icon"></div>
        <div className="password">{password}</div>
        <button className="generate-password" onClick={generatePassword}>
          Generate password
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
