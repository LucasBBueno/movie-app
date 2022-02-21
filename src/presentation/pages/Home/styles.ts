import styled, { keyframes } from 'styled-components'

const AppearFromOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.2;
  }
`

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  max-width: 1600px;

  video {
    width: 100vw;
    height: 45vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.2;
    animation: ${AppearFromOpacity} 3s;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Search = styled.div`
  margin-top: 80px;
`