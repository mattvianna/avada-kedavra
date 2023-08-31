import React, { useState, useEffect } from 'react';
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
  // const {image, name, dateOfBirth, house, patronus, actor, alive} = CharactersPage
  const [characters, setCharacters] = useState<ICharactersPage[]>([]);
  console.log("🚀 ~ file: index.tsx:17 ~ CharactersPage ~ characters:", characters)
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 5;

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

  const limit = 25;

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      <ul className="pagination">
        {Array.from({ length: Math.ceil(characters.length / charactersPerPage) }).slice(0, 5).map((_, index) => (
          <li key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersPage;
