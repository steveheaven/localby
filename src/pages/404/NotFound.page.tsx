import { FC, ReactElement, ReactHTMLElement } from "react";
import styled from "styled-components";

type NotFoundType = {
  children?: ReactElement,  
}

const NotFound: FC<NotFoundType> = () => {
   return (
       <>
        404 NotFound
       </>
   );
}

export default NotFound;