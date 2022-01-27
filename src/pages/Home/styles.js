import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat, repeat;
`;

export const Glass = styled.div`
  background: rgba( 255, 255, 255, 0.05 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 65px;

  margin: 10px;
`;

export const SubTitle = styled.h3`
  color: #FFF;
  font-size: 35px;

  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;

  color: #000;
  font-weight: bold;
  background-color: #FFF;
  opacity: .7;
  border: none;

  margin-top: 20px;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
`;


export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: none;

  background-color: #FFF;
  opacity: .7;
  cursor: pointer;

  margin: 10px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;