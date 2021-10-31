import React, { useEffect, useState } from 'react'

const useJoke = (firstName,lastName) => {
    const [joke, setJoke] = useState("");
    useEffect(()=>{
        const fetchJoke =async ()=>{await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
            .then(res=>res.json())
            .then(({value})=>{
                setJoke(value.joke)
        })}
        fetchJoke()
    },[firstName,lastName])
   
    return joke;
}

export default useJoke
