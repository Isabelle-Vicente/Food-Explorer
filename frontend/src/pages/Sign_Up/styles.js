import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.COLORS.Dark_400};;
  margin: 0;
  display: flex;
  height: 100vh;
`;


export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;
  color: ${({ theme }) => theme.COLORS.Light_100};

  h1 {
    text-align: center;
    width: auto; /* Alterado para auto para ajustar ao conteúdo */
    margin-left: 10px; /* Adiciona espaço entre o hexágono e o texto */
  }
`;

export const Hexagon = styled.div`
  width: 40px; /* Largura do hexágono */
  height: 23.09px; /* Altura proporcional */
  background-color: #64C7CC;
  position: relative;
  margin: 0 10px; /* Espaçamento lateral para o hexágono */

  &::before, &::after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 20px solid transparent; /* Metade da largura */
    border-right: 20px solid transparent; /* Metade da largura */
  }

  &::before {
    bottom: 100%;
    border-bottom: 11.55px solid #64C7CC; /* Metade da altura */
  }

  &::after {
    top: 100%;
    border-top: 11.55px solid #64C7CC; /* Metade da altura */
  }
`;


export const LoginCard = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  background-color:  ${({ theme }) => theme.COLORS.Dark_700};
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.Light_100};

   h2 {
    text-align: center;
    width: 100%;
    font-family: 'Poppins';
    font-weight: 400;

  }

  p {
    text-align: center;
    width: 100%;

  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.COLORS.Tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-bottom: 32px;


  &:hover {
    background-color:  ${({ theme }) => theme.COLORS.Tomato_200};
  }
`;