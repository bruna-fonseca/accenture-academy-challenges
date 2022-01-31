import React from 'react';
import Fade from 'react-reveal/Fade';

import SocialIcons from '../../components/SocialIcons';
import BrunaImg from '../../assets/bruna.png';
import * as S from './styles'

export default function About() {
  return (
    <div>
      <S.Wrapper>

        <S.BlackBg>
          <Fade left>
            <S.Title>Bruna Fonsêca</S.Title>
            <S.SubTitle>Web Developer</S.SubTitle>
            <SocialIcons />
          </Fade>
        </S.BlackBg>

        <S.WhiteBg >
          <Fade right>
            <img alt="Foto de Bruna" src={ BrunaImg } style={{ marginBottom: '40px' }} height={260} />
            <S.Paragraph>
              Oie, tudo bem?
            </S.Paragraph>
            <S.Paragraph>
              Sou Bruna, estudante de ADS e estudei na turma 7 da Trybe.
              Venho da área da comunicação, mas minha paixão pela tecnologia fez despertar um
              desejo de tornar o desenvolvimento minha carreira e área de estudo.
            </S.Paragraph>
          </Fade>
        </S.WhiteBg>
      </S.Wrapper>
    </div>
  );
};
