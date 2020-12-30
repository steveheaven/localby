import { FC, ReactElement } from "react";
import styled from "styled-components";
import Header from "./Header.component";
import Navbar from "./Navbar.component";

const MaxWidth1200Px = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
`


type LayoutType = {
  children: ReactElement,  
}

const Layout: FC<LayoutType> = ({children}) => {
   return (
       <>
        <MaxWidth1200Px>
              <Header/>
        </MaxWidth1200Px>
          <Navbar/>
           {children}
       </>
   );
}

export default Layout;