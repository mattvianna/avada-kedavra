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

  const limit = 24;
  const charactersPerPage = 6;
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
      <ul className='wrapLista'>
        {currentCharacters.slice(0, limit).map((character) => (
          <li className='wrapLista__item' key={character.name}>
            <div className='moldura'>
              <span className='moldura__adorno'></span>
              <img className='moldura__foto' src={character.image} alt={character.name} />
            </div>
            <div className='infoWrapper'>
              <p className='item__nome'>Nome: <span>{character.name ? character.name : "???"}</span></p>
              <p className='item__ator'>Ator: <span>{character.actor ? character.actor : "???"}</span></p>
              <p className='item__aniversario'>Nascimento: <span>{character.dateOfBirth ? character.dateOfBirth : "???"}</span></p>
              <p className='item__casa'>Casa: <span>{character.house ? character.house : "???"}</span></p>
              <p className='item__patrono'>Patrono: <span>{character.patronus ? character.patronus : "???"}</span></p>
              <p className='item__vivo'>Está vivo? <span>{character.alive ? "Permanece vivo 💫" : "Infelizmente morreu ☠️"}</span></p>
            </div>
          </li>
        ))}
      </ul>
      
      <Paginacao 
        current={currentPage} 
        setCurrentPage={setCurrentPage} 
        characters={characters} 
        charactersPerPage={charactersPerPage}
      />
    </div>
  );
};

export default CharactersPage;
