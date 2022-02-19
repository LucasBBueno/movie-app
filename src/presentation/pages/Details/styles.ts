import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 80px auto;
  max-width: 1280px;
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
    color: rgb(211, 209, 208);
    font: 20px "Helvetica Neue",Arial,sans-serif;
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