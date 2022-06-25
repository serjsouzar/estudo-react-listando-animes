import styled from "styled-components";

export const MainTitle = styled.h2`
  height: 1rem;
  text-align: center;
  margin-top: 8rem;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  padding: 2.5rem 4rem 5rem;
  display: flex;
  max-width: 1120px;
  justify-content: center;
  align-items: center;

  #box {
    width: 500px;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5);
    border-radius: 3rem;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    text-align: left;
    margin-right: -10rem;

    #searchIcon {
      margin-right: 1rem;
    }

    input {
      border: none;
      flex: 1;
      height: 40px;
      outline: none;
      font-size: 18px;
      

      /* padding: 0 5rem;
    border-radius: 2.5rem;
    height: 2.5rem;
    text-align: left; */

      ::placeholder {
        margin: 0;
        padding: 1rem;
      }
    }
  }
`;
export const AnimeCards = styled.div`
  width: 1120px;
  margin: 5.5rem;
  margin-top: -1rem;

  li {
    display: grid;
    align-items: center;
  }

  #li {
    display: inline-block;
    margin: 1rem;
    margin-left: 4rem;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);

    #text-title {
      margin: 5px;
    }

    img {
      border-radius: 0.3rem;
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
