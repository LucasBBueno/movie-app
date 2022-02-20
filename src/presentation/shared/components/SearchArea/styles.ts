import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Title = styled.h1`
  font: 42px "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  margin: 0;
  margin-bottom: 32px;
  max-width: 600px;

  @media(max-width: 1024px) {
    font-size: 28px;
    max-width: 310px;
  }
`

export const InputBox = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 50px;
    width: 400px;
    background-color: rgba(109, 109, 110, 0.7);
    border: 0;
    padding: 0 8px;
    border-radius: 6px 0 0 6px;
    color: #fff;
    font: 14px "Helvetica Neue", Arial, sans-serif;

    ::placeholder {
      color: #fff;
      font: 14px "Helvetica Neue", Arial, sans-serif;
      font-weight: 500;
    }

    @media(max-width: 1024px) {
      width: 200px;
      height: 40px;
    }
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
  width: 200px;
  background-color: #FFDB4C;
  border: 0;
  border-radius: 0 6px 6px 0;
  color: #000000;
  font: 16px "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :hover {
    opacity: 0.8;
  }

  @media(max-width: 1024px) {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }
`