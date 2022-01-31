import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

`;

export const BlackBg = styled.div`
  background-color: #000;
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WhiteBg = styled.div`
  background-color: #FFF;
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;
`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 50px;
`;

export const SubTitle = styled.h2`
  color: #FFF;
  font-size: 30px;

  margin-top: 20px;
`;

export const Paragraph = styled.p`
  color: #000;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  margin-bottom: 20px;
`;