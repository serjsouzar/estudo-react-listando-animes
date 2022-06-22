import styled from "styled-components";

export const MainTitle = styled.h2`
    height: 1rem;
    text-align:center;
    margin-top: 8rem;
    font-size: 2.8rem;
`

export const Container = styled.div`
  
  padding: 2.5rem 4rem 5rem;
  display: flex;
  max-width: 1120px;  
  justify-content: center;

  input {
    margin-top: -2rem;
    padding: 0 5rem;
    width: auto;
    border-radius: 0.25rem;
    height: 2.5rem;

    ::placeholder {
      justify-content:baseline;
      padding: 15px;
    }
  }
`
export const AnimeCards = styled.div`

  width: 1120px;
  margin: 5.5rem;
  margin-top: -1rem;
  
  li{
    display: grid;
    align-items: center;
  }

  #li{
    display:inline-block;
    margin: 1rem;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
`;