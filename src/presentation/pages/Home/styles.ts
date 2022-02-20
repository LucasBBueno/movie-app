import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 80px;

  video {
    width: 100vw;
    height: 55vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.2;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Search = styled.div`
  /* margin-left: -15%;
  margin-top: 10%; */
  position: fixed;
  left: 35%;
  top: 35%;
  transform: translate(-50%, -50%);

  @media(max-width: 1024px) {
    left: 5%;
    top: 30%;
    transform: translate(0)
  }
`