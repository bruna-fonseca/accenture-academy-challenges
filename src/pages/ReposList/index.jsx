import React from 'react';

import Card from '../../components/Card';
import useReq from '../../hooks/useReq';

import * as S from './List.style';

export default function ReposList() {
  const { repo } = useReq();

  return (
    <div>
      <S.Title style={{ textAlign: 'center' }}>
        Lista de repositórios
      </S.Title>
      <S.Wrapper>
        {repo && repo.map((item, idx) => (
          <Card info={item} key={idx}>
            <S.SubTitle>{ item.name }</S.SubTitle>
            {item.description ? 
              <S.Description>{item.description}</S.Description> : 
              <S.Description>Não tem descrição</S.Description>}
          </Card>
        ))}
      </S.Wrapper>
    </div>
  );
};
