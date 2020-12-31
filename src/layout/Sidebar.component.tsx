import { FC, Fragment, ReactElement } from "react";
import styled from "styled-components";
import categories from "../constants/categories";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setCategory } from "../redux/actions/category.action";

const SidebarWrap = styled.div`
/* background-color: red; */
width: 20%;
height: auto;
border-radius: 6px;
padding: 10px;
box-sizing: border-box;
box-shadow: 1px 1px 4px 1px grey;
`
const Category = styled.div`
color: ${props=> props.theme.color.black};
font-size: 0.9em;
margin-top: 5px;
`

type SidebarType = {
  children?: ReactElement,  
}

const Sidebar: FC<SidebarType> = () => {
  const {t} = useTranslation();
   return (
       <>
       <SidebarWrap>
         {categories?.map((category, i) => {
             return (
                 <Fragment key={i}>
                  <Category>{t(category.name)}</Category>
                 </Fragment>
             );
         })}
       </SidebarWrap>
       </>
   );
}

export default connect()(Sidebar);