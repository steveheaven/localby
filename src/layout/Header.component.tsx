import { ChangeEvent, FC, FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../lib/button/Button.component";
import Select from "../lib/select/Select.component";
import cities from "../constants/cities";
import Divider from "../lib/divider/Divider.component";
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLang } from "../redux/actions/lang.action";

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
padding: 11px 30px 10px 30px;
position: relative;
top: 1px;
z-index: 1;
box-sizing: border-box;
`
const RightSection = styled.div`
float: right;
`

type HeaderType = {
  props?: any,
  setLang: (lang: string) => void
}

const Header: FC<HeaderType> = ({ setLang }) => {

   const {t, i18n} = useTranslation();
   const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };
  
   const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "EN") {
           setLang("en")
           changeLanguage("en");
         } else if (e.target.value === "CZ") {
            changeLanguage("cz");
            setLang("cz")
        }
   }

   return (
       <>
       <Wrap>
              <Logo>Logo</Logo>
                <Search placeholder={t("searchPlaceholder")} />
                   <Localization>max do
                      <Select options={["10","20","50","100"]}/>km od
                      <Select options={cities}/>
                   </Localization>
                <Button value={t("searchButton")} radius="0 6px 6px 0" />
                <RightSection>
                    <Link to="/login">
                      <Button value={t("login")} radius="30px" width="100px" color="#3a3a3a" inverted/>
                    </Link>
                     <Divider type="vertical" />
                    <Link to="/register">
                      <Button value={t("register")} width="150px" radius="30px" inverted/>
                    </Link>
                     <Select options={["EN","CZ"]} onChange={changeHandler}/>
                </RightSection>
       </Wrap>
       </>
   );
}

export default connect(null, { setLang })(Header);