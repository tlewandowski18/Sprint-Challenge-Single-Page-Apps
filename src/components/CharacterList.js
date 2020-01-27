import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
  const [filteredCharacters, setFilteredCharacters] = useState([])

  const CharacterBox = styled.div `
    width: 90%;
    margin: 2% auto;
    border: 2px solid blue;
    padding: 1% 3%;
    background-color: beige;
    border-radius: 20px;
    
  `

  const InputBox = styled.div `
    width: 90%;
    margin: 2% auto;


  `

  const Input = styled.input `
    width: 300px;
    padding: 1% 2%;
    border: 1px solid black
    border-radius: 10px;
    font-size: 1.2rem;
  `

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results)
        setFilteredCharacters(res.data.results)
      })
      .catch(err => {
        console.log("You have an error! ", err)
      })
  }, []);

  useEffect(() => {

    const filtered = characters.filter(character => character.name.toUpperCase().includes(search.toUpperCase()))
    setFilteredCharacters(filtered)

  }, [search])

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  console.log(characters)
  return (
    <section className="character-list">
      <input
        type="text"
        placeholder="Search characters here"
        value={search}
        onChange={handleChange}
      />
      {filteredCharacters.map(character => {
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
