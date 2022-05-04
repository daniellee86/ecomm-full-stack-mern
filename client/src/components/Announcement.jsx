import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #125B50; 
color: #FAF5E4;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (

   <Container>
       YEP. FREE SHIPPING ON ORDERS OVER £50!
   </Container>

  )
}

export default Announcement