import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  max-width: 220px;
  transition: all 450ms;
  background-color: #232F3E;
  padding: 8px;
 
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 6px;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }
`