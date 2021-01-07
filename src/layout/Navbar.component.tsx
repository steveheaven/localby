import { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import categories from "../constants/categories";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { connect } from "react-redux";
import { setCategory } from "../redux/actions/category.action";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Select from "../lib/select/Select.component";

const Wrap = styled.div`
background-color: ${props => props.theme.color.main};
height: 67px;
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
position: relative;
top: -10px;
left: -40px;
`
const Category = styled.li<{active?: boolean}>`
float: left;
margin: 0 20px 0 13px;
font-size: 0.9em;
box-sizing: border-box;
border-bottom: ${props => props.active ? "2px solid white" : "none"};
padding: ${props => props.active ? "0 5px 10px 5px" : "0"};
font-size: ${props => props.active ? "1em" : "0.9em"};
font-weight: ${props => props.active ? "bold" : "normal"};
&:hover {
font-weight: bold;
transition: 0.2s;
}
`
const Icon = styled.div`
width: 20px;
height: 20px;
position: relative;
top: -7px;
float: left;
`
const Image = styled.img`
height: auto;
width: 27px;
filter: invert(100%);
`
const Redirect = styled.div`
color: white;
cursor: pointer;
`

type NavbarType = {
  activeCategory: {category: string},
  setCategory: (category: string) => void,
}

const Navbar: FC<NavbarType> = ({activeCategory, setCategory}) => {

  const [isActive, setIsActive] = useState(false);
  const {t} = useTranslation();
   return (
     <Wrap>
           <MaxWidth1200Px>
             <List>
               {categories.map((category, i) => {
                 if (i > 4) {
                   return;
                 }
                 return (
                   <Fragment key={i}>
                     <Redirect onClick={() => {
                       setCategory(category.name)
                     }}>
                       <Icon><Image src={category.icon} /></Icon>
                       <Category active={activeCategory.category === category.name}>{t(category.name)}</Category>
                     </Redirect>
                   </Fragment>
                 ); 
               })}
               <Category>Other {" >"}</Category>
             </List>
           </MaxWidth1200Px>
       </Wrap>
   );
}

const mapStateToProps = (state: any) => ({
   activeCategory: state.category
});

export default connect(mapStateToProps, { setCategory })(Navbar);