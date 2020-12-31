import { FC } from "react";
import styled from "styled-components";


type DividerType = {
  type: string
  width?: string
  height?: string
}

    const StyledDivider = styled.span<DividerType>`
    ${props => {
        if (props.type === "vertical" && props.width) {
            return `margin: 0 ${props.width};`
        } else if (props.type === "horizontal" && props.height) {
            console.log("hori");
               return `margin: ${props.height} 0; width: 100%;`
        } else {
            return `margin: 0 5px; height: 100%;`
        }
    }}
    background-color: red;
    `
const Divider: FC<DividerType> = ({type, width, height}) => {

   return (
       <>
         <StyledDivider type={type} width={width} height={height} />
       </>
   );
}

export default Divider;