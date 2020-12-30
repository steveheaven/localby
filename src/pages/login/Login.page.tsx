import { FC, ReactElement, ReactHTMLElement } from "react";
import styled from "styled-components";

type LoginType = {
  children?: ReactElement,  
}

const Login: FC<LoginType> = () => {
   return (
       <>
        LoginPage
       </>
   );
}

export default Login;