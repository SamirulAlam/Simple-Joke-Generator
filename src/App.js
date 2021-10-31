import React, { useRef, useState } from 'react'
import "./App.css"
import useJoke from './useJoke';

const App = () => {
  const firstNameRef =useRef(null)
  const lastNameRef =useRef(null)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]= useState("");
  const joke=useJoke(firstName,lastName)

  const generateJoke=(e)=>{
      e.preventDefault();
      setFirstName(firstNameRef.current.value);
      setLastName(lastNameRef.current.value);
  }

  return (
    <div className="app">
        <div className="app__joke">
          <h1>{joke}</h1>
        </div>
        <div className="app__form">
            <form>
                <input type="text" placeholder="First Name" ref={firstNameRef} />
                <input type="text" placeholder="Last Name"  ref={lastNameRef} />
                <button onClick={generateJoke}>click me</button>
            </form>
        </div>

    </div>
  )
}

export default App
