import styled from "styled-components";

export const MainTitle = styled.h2`
    height: 1rem;
    text-align: center;
    margin-top: 8rem;
    font-size: 2.8rem;
`

export const Container = styled.div`
  max-width: 1120px;
  padding: 4rem;
  display: flex;
  justify-content: center;

  input {
    margin-top: -2rem;
    padding: 0 5rem;
    width: auto;
    border-radius: 0.25rem;
    height: 2.5rem;

    ::placeholder {
      text-align: center;
    }
  }
`
export const AnimeCards = styled.div`

  width: 1120px;
  margin: 0 10rem;
  justify-content: center;

  li{
    display: inline;
    text-align: center;
  }
`;