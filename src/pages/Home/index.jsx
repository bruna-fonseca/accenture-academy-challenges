import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

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
          <S.IconDiv>
            <a href="https://github.com/bruna-fonseca" target="_blank" >
              <S.IconButton>
                <AiFillGithub />
              </S.IconButton>

            </a>
            <a href="https://www.linkedin.com/in/fonseca-bruna/" target="_blank" >
              <S.IconButton>
                <AiFillLinkedin />
              </S.IconButton>
            </a>
            <a href="mailto:1998bfonseca@gmail.com" >
              <S.IconButton>
                <AiOutlineMail />
              </S.IconButton>
            </a>
            
          </S.IconDiv>
        </Fade>
      </S.Glass>
    </S.Container>
  );
};
