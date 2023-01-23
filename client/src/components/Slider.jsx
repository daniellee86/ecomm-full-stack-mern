import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"
import { sliderItems } from "../data"
import { mobile, tablet } from "../responsive";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
color: #171010;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.8;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.img`
height: 100%;
`

const InfoContainer = styled.div`
flex: 1;
white-space: pre-wrap;
`

const InfoWrapper = styled.div`
width: 70%;
`
const Title = styled.h1`
font-size: 70px;
border-bottom: solid 1.5px #171010;
padding: 20px 0;
${tablet({ fontSize: "50px" })}
`
const Desc = styled.p`
margin: 50px 0;
padding: 20px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
line-height: 1.5;
border-bottom: solid 1.5px #171010;
${tablet({ fontSize: "15px" })}
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border: solid 1.5px #171010 ;
outline: none;
border-radius: 20px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=> {

        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
            
        } else {

            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
        }
    }

  return (
   <Container>
       <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/>
       </Arrow>

        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
             <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <InfoWrapper>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={`/products/${item.category}`} style={{ textDecoration: 'none', color: "#171010" }}>
                <Button>SHOP NOW</Button>
                </Link>
                </InfoWrapper>
            </InfoContainer>
            </Slide>
            ))}

        </Wrapper>

       <Arrow direction="right" onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
       </Arrow>
   </Container>
  )
}

export default Slider