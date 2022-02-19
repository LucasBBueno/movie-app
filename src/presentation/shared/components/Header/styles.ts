import styled from "styled-components"

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 60px;
  background-color: #232F3E;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(180deg,#1b2530 0,rgba(27,37,48,.85));
  z-index: 1;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 42px;
    margin-right: 16px;
  }

  span {
    font: 16px "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    font-weight: 600;
    color: #FFDB4C;
  }
`

export const Search = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
    :hover {
      opacity: 0.8;
    }
  }
`