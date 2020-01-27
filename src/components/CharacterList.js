import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  const CharacterBox = styled.div `
    width: 90%;
    margin: 2% auto;
    border: 2px solid blue;
    padding: 1% 3%;
    background-color: beige;
    border-radius: 20px;
    
  `
  const Name = styled.h1 `
  
  `

  


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log("You have an error! ", err)
      })
  }, []);

  console.log(characters)
  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterBox key={character.id}>
            <h1>{character.name}</h1>
            <h2>Species: {character.species}</h2>
            <h2>Status: {character.status}</h2>
            <p>Number of Episodes: {character.episode.length}</p>
          </CharacterBox>
        )
      })}
    </section>
  );
}
