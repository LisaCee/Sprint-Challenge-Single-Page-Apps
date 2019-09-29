import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, getCharacters] = useState([]);
  
  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios.get(`https://rickandmortyapi.com/api/character/`) 
    .then(res => {getCharacters(res.data.results)})
    .catch(err => console.log(err))
  }, []);
  console.log(characters)
  return (
    <section className="character-list">
      {characters.map((character) => 
        <li key={character.id}>{character.name}</li>)}
    </section>
  );
}
