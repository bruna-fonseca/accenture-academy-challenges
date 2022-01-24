import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './repoDetails.style';

export default function RepoDetails() {
    const [repoDetails, setRepoDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      const details = JSON.parse(localStorage.getItem('detalhes'))
      setRepoDetails(details);
    }, [repoDetails]);
    
    console.log(repoDetails)

  return (
    <S.Wrapper>
      <S.Title>Detalhes do Repositório</S.Title>
      <S.Container>
        {repoDetails && (
          <>
            <S.SubTitle>{ repoDetails.name }</S.SubTitle>
            <S.Paragraph><strong>Descrição: </strong>{repoDetails.description}</S.Paragraph>
            <S.Paragraph><strong>URL: </strong>{repoDetails.html_url}</S.Paragraph>
            <S.Paragraph><strong>Linguagem utillizada:</strong> {repoDetails.language}</S.Paragraph>
          </>
            )}
        <S.Button onClick={ () => navigate(-1) }>Voltar para a página principal</S.Button>
      </S.Container>
  </S.Wrapper>
  );
};
