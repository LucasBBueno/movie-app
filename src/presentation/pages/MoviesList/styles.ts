import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 80px auto;
  padding: 40px 20px;
  max-width: 1600px;
  height: 105vh;
  flex: 1;
`

export const Total = styled.div`
  display: flex;
  align-items: center;

  button {
    font: 18px "Helvetica Neue", Arial, sans-serif;
    color: #FFDB4C;
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

export const RowResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  div {
    margin: 12px;
  }
  
  margin: 0 auto;
  padding: 30px 0;
`

export const LoadingMoreResults = styled.h4`
  font: 20px "Helvetica Neue", Arial, sans-serif;
  color: rgb(211, 209, 208);
  font-weight: 500;
  margin-top: 80px;
  text-align: center;
`