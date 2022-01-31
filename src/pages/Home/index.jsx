import React from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import SocialIcons from '../../components/SocialIcons';
import * as S from './styles.js';

export default function Home() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Glass>
        <Fade bottom>
          <S.Title>Bruna Fonsêca</S.Title>
          <S.SubTitle>Web Developer</S.SubTitle>
          <S.Button onClick={ () => navigate('/sobre') }>Sobre</S.Button>
          <SocialIcons />
        </Fade>
      </S.Glass>
    </S.Container>
  );
};
