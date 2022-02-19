import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
`

export const Image = styled.img`
  object-fit: cover;
`

export const Content = styled.section`
  width: 100%;
  padding: 40px;
  color: rgb(211, 209, 208);
  background-color: rgba(35,47,62,.7);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  margin: 0;
  font: 42px "Helvetica Neue",Arial,sans-serif;
  font-weight: 600;
  color: #FFDB4C;
`

export const Rating = styled.span`
  font: 20px "Helvetica Neue",Arial,sans-serif;
  font-weight: 600;
  color: #fff;
  padding: 20px;
  border: 1px solid #FFDB4C;
  border-radius: 50%;
`

export const Plot = styled.section`
  margin-top: 30px;

  label {
    font: 16px "Helvetica Neue",Arial,sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
  }

  p {
    font: 14px "Helvetica Neue",Arial,sans-serif;
  }
`

export const Genres = styled.section`
  margin-top: 30px;

  label {
    font: 16px "Helvetica Neue",Arial,sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 8px;

    li {
      font: 14px "Helvetica Neue",Arial,sans-serif;
      background-color: #FFDB4C;
      font-weight: 600;
      color: #2f2f2f;
      padding: 4px 8px;
      border: 4;
      border-radius: 6px;
    }

    li + li {
      margin-left: 16px;
    }
  }
`

export const Director = styled.div`
  margin-top: 30px;

  label {
    font: 16px "Helvetica Neue",Arial,sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
  }

  p {
    font: 14px "Helvetica Neue",Arial,sans-serif;
  }
`

export const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;

  section {
    display: flex;
    align-items: center;

    label {
      font: 14px "Helvetica Neue",Arial,sans-serif;
        font-weight: 500;
        margin-right: 4px;
    }

    p {
      font: 14px "Helvetica Neue",Arial,sans-serif;
      margin-right: 24px;
    }
  }
`