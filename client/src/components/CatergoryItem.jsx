import styled from "styled-components"
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "40vh" })}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: #FAF5E4;
margin: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: #FAF5E4;
color: #2B2B2B;
cursor: pointer;
font-weight: 600;
border-radius: 20px;
`

const CatergoryItem = ({ item }) => {
  return (

    <Container>
      <Link to={`/products/${item.category}`}>
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>

  )
}

export default CatergoryItem