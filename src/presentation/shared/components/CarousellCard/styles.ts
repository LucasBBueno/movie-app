import styled from 'styled-components'

export const Wrapper = styled.div`
  img {
    object-fit: contain;
    max-height: 350px;
    max-width: 350px;
    transition: transform 450ms;
    margin-right: 12px;
    opacity: 0.8;
    border-radius: 6px;
  
    :hover {
      opacity: 1;
      transform: scale(1.08);
      cursor: pointer;
    }
  }

  @media(max-width: 1024px) {
    img {
      height: 250px;
      width: 220px;
    }
  }
`