import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [joke, setJoke] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]= useState("");

  const fetchJoke =async ()=>{await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    .then(res=>res.json())
    .then(({value})=>{
        setJoke(value.joke)
    })}
  return (
    <div className="app">
        <div className="app__joke">
          <h1>{joke}</h1>
        </div>
        <div className="app__form">
            <form>
                <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} />
            </form>
        </div>
        <div className="app__button">
        <button onClick={fetchJoke}>click me</button>
        </div>
    </div>
  )
}

export default App
