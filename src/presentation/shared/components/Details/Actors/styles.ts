import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 24px 12px;
  background-color: #fff;
`

export const Title = styled.h2`
  font: 28px "Helvetica Neue",Arial,sans-serif;
  font-weight: 600;
  color: rgb(211, 209, 208);
  text-transform: uppercase;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 32px;
  margin-top: 16px;
`

export const Actor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin-bottom: 22px;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  span {
    font: 16px "Helvetica Neue",Arial,sans-serif;
    font-weight: 600;
    margin-top: 8px;
    color: #2f2f2f;
  }
`