import React from 'react'

interface IPaginacao {
  current: number
  setCurrentPage: (newState: number) => void
  characters: {}
  charactersPerPage: number
}

function Paginacao({current, setCurrentPage, characters, charactersPerPage} : IPaginacao) {

  // converte o objeto dos dados em um array,
  // possibilitando assim a verificação de seu
  // tamanho para a exibição da paginação
  const convertObject = Object.values(characters)  

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  console.log("paginate:", current)

  return (
    <ul className="pagination">
      {Array.from({ length: Math.ceil(convertObject.length / charactersPerPage) }).slice(0, 5).map((_, index) => (
        <li 
          key={index}
          className={index + 1 === current ? 'active' : ''}
          onClick={() => paginate(index + 1)}
        >
          <p>
            {index + 1}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default Paginacao