import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [state, setstate] = useState(" ")
  
//  useEffect(()=>{


//    joke()
//  },[])


 const joke =async ()=>{await fetch("https://api.icndb.com/jokes/random").then(res=>res.json()).then(({value})=>{setstate(value.joke)})}
    return (
      <>
        <h1>{state}</h1>
        <button onClick={joke}>click me</button>
      </>
    
  );
}

export default App;
