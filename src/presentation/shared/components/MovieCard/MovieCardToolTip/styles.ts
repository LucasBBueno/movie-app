import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #232F3E;
  max-width: 900px;
  padding: 4px;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s;

  img {
    width: 215px;
    height: 325px;
    object-fit: cover;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 150px;
`

export const Title = styled.h3`
  font: 20px "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  color: #fff;
  max-width: 200px;
  text-align: center;
  margin-bottom: 8px;
`

export const Complement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  padding: 24px;
  width: 250px;

  section {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #aaa;
    font: 16px "Helvetica Neue", Arial, sans-serif;
  }
  
  span {
    color: #aaa;
    font: 14px "Helvetica Neue", Arial, sans-serif;
    margin-top: 8px;
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const MoreInfo = styled.button`
  background-color: #FFDB4C;
  padding: 16px 32px;
  border: 0;
  border-radius: 6px;
  color: #2f2f2f;
  font: 14px "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  transition: opacity 450ms;
  margin-top: 12px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`