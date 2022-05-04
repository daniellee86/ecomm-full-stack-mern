import styled from "styled-components"
import {categories} from "../data"
import CatergoryItem from "./CatergoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
${mobile({ padding: "0px", flexDirection:"column" })}
background-color: #FAF5E4
`

const Categories = () => {
  return (
    <Container>

{categories.map(item=>(
  <CatergoryItem item={item} key={item.id}/>
))}

    </Container>
  )
}

export default Categories