import { FC, Fragment, ReactElement } from "react";
import styled from "styled-components";
import categories from "../constants/categories";
import images from "../assets/images/category_food.png";

const Wrap = styled.div`
background-color: ${props => props.theme.color.main};
height: 60px;
color: white;
padding-top: 20px;
box-sizing: border-box;
`
const MaxWidth1200Px = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
`
const List = styled.ul`
list-style-type: none;
`
const Category = styled.li`
float: left;
margin: 0 15px;
`
const Icon = styled.div`
width: 20px;
height: 20px;
float: left;
background-size: contain;
background-repeat: no-repeat;
background-color: blue;
`
const Image = styled.img`
height: auto;
`

type NavbarType = {
  children?: ReactElement,  
}

const Navbar: FC<NavbarType> = ({}) => {
   return (
       <Wrap>
           <MaxWidth1200Px>
             <List>
               {categories.map((category, i) => {
                 return (
                   <Fragment key={i}>
                   <Icon><Image src={`/assets/${category.icon}`} /></Icon>
                    <Category>{category.name}</Category>
                   </Fragment>
                 ); 
               })}
             </List>
           </MaxWidth1200Px>
       </Wrap>
   );
}

export default Navbar;