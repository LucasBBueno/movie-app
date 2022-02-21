import styled, { keyframes } from 'styled-components'

const AppearFromOpacityAndBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Wrapper = styled.div`
  margin: 80px auto;
  padding: 40px 20px;
  max-width: 1600px;
  animation: ${AppearFromOpacityAndBottom} 1.2s;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  color: rgb(211, 209, 208);
  font: 20px "Helvetica Neue",Arial,sans-serif;
  
  button {
    cursor: pointer;
    text-decoration: none;
    margin-right: 8px;
    color: #FFDB4C;
    font: 20px "Helvetica Neue",Arial,sans-serif;
    font-weight: 600;
    background-color: transparent;
    border: 0;

    :hover {
      opacity: 0.8;
    }
  }

  p {
    margin-right: 8px;
    font-weight: 600;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  margin-top: 40px
`