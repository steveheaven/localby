import { FC, ReactElement } from "react";
import styled from "styled-components";
import Button from "../lib/button/Button.component";
import Select from "../lib/select/Select.component";
import cities from "../constants/cities";

const Wrap = styled.div`
/* background-color: #e66767; */
padding-top: 15px;
height: 55px;
`
const Logo = styled.span`
/* background-color: #7ce667; */
margin-left: 5px;
width: 40px;
`
const Search = styled.input`
height: 40px;
width: 25%;
border-radius: 6px 0 0 6px;
margin-left: 60px;
border: 0.5px solid grey;
padding-left: 15px;
position: relative;
left: 1px;
box-sizing: border-box;
outline: none;
`
const Localization = styled.span`
/* height: 40px; */
/* width: 90px; */
color: ${props => props.theme.color.main};
border-radius: 0;
border: 0.5px solid ${props => props.theme.color.main};
outline: none;
padding: 10px 30px 10px 30px;
position: relative;
top: 1px;
z-index: 1;
box-sizing: border-box;
`

type HeaderType = {
  props?: any,  
}

const Header: FC<HeaderType> = () => {
   return (
       <>
       <Wrap>
              <Logo>Logo</Logo>
                <Search placeholder="Hledejte název, kategorii nebo značku..."/>
                   <Localization>max do
                      <Select options={["10","20","50","100"]}/>km od
                      <Select options={cities}/>
                   </Localization>
                <Button value="Hledej" radius="0 6px 6px 0"/>
       </Wrap>
       </>
   );
}

export default Header;