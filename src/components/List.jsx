import React from 'react'

const LIST_STYLES = {
  marginTop: '30px',
  fontWeight: 'bold',
  
}

export default function List({ list }) {
  return (
  <ul style={ LIST_STYLES }>
      {list && list.map(({ infoBook }, idx) => (
        <li key={idx}>
          Livro {infoBook.livro} ({infoBook.autor}) - {infoBook.ano}
        </li>
      ))}
    </ul>
  )
}
