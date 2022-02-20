import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  padding: 12px;

  @media (max-width: 1600px) {
    max-width: 1024px;
  }
`