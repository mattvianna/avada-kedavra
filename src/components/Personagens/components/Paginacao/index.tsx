import React from 'react'

interface IPaginacao {
  setCurrentPage: (newState: number) => void
  characters: {}
  charactersPerPage: number
}

function Paginacao({setCurrentPage, characters, charactersPerPage} : IPaginacao) {

  // converte o objeto dos dados em um array,
  // possibilitando assim a verificação de seu
  // tamanho para a exibição da paginação
  const convertObject = Object.values(characters)  

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ul className="pagination">
      {Array.from({ length: Math.ceil(convertObject.length / charactersPerPage) }).slice(0, 5).map((_, index) => (
        <li key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </li>
      ))}
    </ul>
  )
}

export default Paginacao