import React, { useState, useEffect } from 'react';
import Paginacao from '../Paginacao';
import axios from 'axios';

interface ICharactersPage {
  image: string;
  name: string;
  dateOfBirth: string;
  house: string;
  patronus: string;
  actor: string;
  alive: boolean;
}

function CharactersPage () {
  const [characters, setCharacters] = useState<ICharactersPage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 25;
  const charactersPerPage = 5;
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        setCharacters(response.data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchCharacters();
  }, []);


  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <ul>
        {currentCharacters.slice(0, limit).map((character) => (
          <li key={character.name}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.actor}</p>
            <p>{character.dateOfBirth}</p>
            <p>{character.house}</p>
            <p>{character.patronus}</p>
            <p>{character.alive ? "vivo" : "morto"}</p>
          </li>
        ))}
      </ul>
      
      <Paginacao setCurrentPage={setCurrentPage} characters={characters} charactersPerPage={charactersPerPage}/>
    </div>
  );
};

export default CharactersPage;
