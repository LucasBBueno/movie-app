import styled, { keyframes } from 'styled-components'

const AppearFromOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  padding: 12px;
  margin-top: 25vh;
  animation: ${AppearFromOpacity} 3s; 

  @media (max-width: 1600px) {
    max-width: 90vw;
  }
`