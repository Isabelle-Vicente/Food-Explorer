import styled from 'styled-components';


export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.Light_400};
`;

export const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
  color: ${({ theme }) => theme.COLORS.Light_400};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 32px;

  &::placeholder {
    background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
    color: ${({ theme }) => theme.COLORS.Light_500};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
    border: 2px solid ${({ theme }) => theme.COLORS.Light_100};   
  }
`;