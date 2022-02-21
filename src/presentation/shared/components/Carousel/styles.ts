import styled from 'styled-components'

export const Wrapper = styled.div`
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  padding: 12px;
  margin-top: 25vh;

  @media (max-width: 1600px) {
    max-width: 90vw;
  }
`