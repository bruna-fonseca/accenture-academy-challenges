import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import * as S from './styles.js';

export default function SocialIcons() {
  return (
    <S.IconDiv>
            <a href="https://github.com/bruna-fonseca" rel="noreferrer" target="_blank" >
              <S.IconButton>
                <AiFillGithub />
              </S.IconButton>

            </a>
            <a href="https://www.linkedin.com/in/fonseca-bruna/" rel="noreferrer" target="_blank" >
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
  );
};
