import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 80px auto;
  padding: 40px 20px;
`

export const Total = styled.div`
  display: flex;
  align-items: center;

  button {
    font: 18px "Helvetica Neue", Arial, sans-serif;
    color: rgb(211, 209, 208);
    font-weight: 600;
    margin-right: 4px;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
  p {
    font: 20px "Helvetica Neue", Arial, sans-serif;
     color: rgb(211, 209, 208);
     font-weight: 600;
     margin-right: 4px;
  }
   h2 {
     font: 20px "Helvetica Neue", Arial, sans-serif;
     color: rgb(211, 209, 208);
     font-weight: 600;
   }
`

export const Results = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  height: 70vh;
  overflow-y: scroll; 

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .infinite-scroll-component  {
    
  }

`

export const RowResult = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 32px;
  margin: 0 auto;
  padding: 30px 0;

  @media(max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media(max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const LoadingMoreResults = styled.h4`
  font: 16px "Helvetica Neue", Arial, sans-serif;
  color: rgb(211, 209, 208);
  font-weight: 500;
  margin-top: 60px;
  text-align: center;
`