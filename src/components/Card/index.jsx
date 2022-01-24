import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Item } from './Card.style';

export default function Card({ children, info }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('detalhes', JSON.stringify(info));
    navigate(`/detalhes/${info.name}`)
  }

  return (
    <Item onClick={ handleClick }>
      { children }
    </Item>
  );
};
