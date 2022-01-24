import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(https://wallpapercave.com/wp/wp6192889.jpg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 450px;
  width: 70vw;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Title = styled.h1`
  margin: 22px;
  color: #FFFFFF;
`;

export const SubTitle = styled.h2`
  margin: 18px;
`;

export const Paragraph = styled.p`
  margin: 7px;
  font-size: 16px;
`;

export const Button = styled.button`
  border: 1px solid #000000;
  background-color: #FFFFFF;
  width: 150px;
  height: 50px;
  border-radius: 10px;

  margin-top: 15px;

  cursor: pointer;
`;