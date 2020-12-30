import { FC, Fragment, ReactElement } from "react";
import styled from "styled-components";
import categories from "../constants/categories";

const SidebarWrap = styled.div`
/* background-color: red; */
width: 20%;
height: auto;
`
const Category = styled.div`
color: ${props=> props.theme.color.black};
font-size: 1.2em;
`

type SidebarType = {
  children?: ReactElement,  
}

const Sidebar: FC<SidebarType> = ({children}) => {
   return (
       <>
       <SidebarWrap>
         {categories?.map((category, i) => {
             return (
                 <Fragment key={i}>
                  <Category>{category.name}</Category>
                 </Fragment>
             );
         })}
       </SidebarWrap>
       </>
   );
}

export default Sidebar;