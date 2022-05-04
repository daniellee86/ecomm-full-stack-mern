import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
//
const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
background-color: #FAF5E4;
color: #171010;
` 
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({ marginLeft: "10px" })}
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
background-color: #FAF5E4;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontsize: "24px" })}
letter-spacing: 5px;
color:#FAF5E4;
text-shadow: -3px 2px #171010 ;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
 ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "5px" })}
`
//
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (

    <Container>
        <Wrapper>
            
         <Left>
          <Language>EN</Language>
          <SearchContainer>
             <Input placeholder='Search'/>
             <Search style={{color:"gray", fontsize:16}}/>
          </SearchContainer>
         </Left>

         <Center><Logo>CLOBBA</Logo></Center>

         <Right>
             <MenuItem>REGISTER</MenuItem>
             <MenuItem>SIGN IN</MenuItem>
             <Link to="/cart">
             <MenuItem>
             <Badge badgeContent={quantity} color="primary">
                 <ShoppingCartOutlined/>
             </Badge>
             </MenuItem>
             </Link>
         </Right>

        </Wrapper>
    </Container>

  )
}

export default Navbar