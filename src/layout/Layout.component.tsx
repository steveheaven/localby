import { FC, ReactElement } from "react";
import styled from "styled-components";
import Header from "./Header.component";
import Navbar from "./Navbar.component";
import { useLocation } from 'react-router-dom'

const MaxWidth = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
`
type LayoutType = {
  children: ReactElement,  
}

const Layout: FC<LayoutType> = ({children}) => {
   const path = useLocation().pathname;
   return (
       <>
        {path !== "/login" && path !== "/register" ? (
          <>
            <MaxWidth>
              <Header/>
           </MaxWidth>
            <Navbar/>
          </>
        ) : null }
           {children}
       </>
   );
}

export default Layout;