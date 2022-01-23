import React, { useState } from 'react'

import { Input, Button , Label } from '../styled-components/Input'
import List from './List'

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  width: 250,
  justifyContent: 'center',
  alignItems: 'center',
}

export default function Inputs() {
  const [infoBook, setInfoBook] = useState({
    livro: '',
    autor: '',
    ano: '',
  })
  const [list, setList] = useState([{
    infoBook: { livro: 'As Cronicas de Nárnia',
    autor: 'C. S. Lewis',
    ano: 1950
  }
  }])

  const handleClick = () => {
    setList((prevState) => [...prevState, { infoBook }])
  }
  

  const handleOnChange = (target) => {
    setInfoBook((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  return (
    <div style={ CONTAINER_STYLES }>
      <header>
        <h1 style={{ textAlign: 'center', marginTop: '50px'}}>Biblioteca do Beco Diagonal</h1>
      </header>

      <Label htmlFor="book">Nome do Livro:</Label>
      <Input
        value={infoBook.livro}
        name="livro"
        onChange={ ({ target }) => handleOnChange(target)}
        type="text"
        id="book"
      />
      <Label htmlFor="author">Nome do Autor:</Label>
      <Input
        value={infoBook.autor}
        name="autor"
        onChange={ ({ target }) => handleOnChange(target) }
        type="text"
        id="author"
      />
      <Label htmlFor="year">Ano de publicação:</Label>
      <Input
        value={infoBook.ano}
        name="ano"
        onChange={ ({ target }) => handleOnChange(target) }
        type="number"
        id="year"
      />
      <Button onClick={ handleClick } type="button">Salvar</Button>

    {list ? <List list={list} /> : null}
    </div>
  )
}
