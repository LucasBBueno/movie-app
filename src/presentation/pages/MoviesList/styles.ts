import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 80px auto;
  max-width: 1280px;
`

export const Total = styled.div`
   h2 {
     margin-top: 40px;
     font: 20px "Helvetica Neue", Arial, sans-serif;
     color: rgb(211, 209, 208);
     font-weight: 600;
   }
`

export const Results = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px;
`