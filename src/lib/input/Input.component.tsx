import { FC } from "react";
import styled from "styled-components";


type SelectType = {
  width?: string,
  height?: string,
  radius?: string,
  color?: string,
  placeholder?: string
}

    const StyledSelect = styled.button<SelectType>`
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    border: none;
    outline: none;
    color: ${props => props.color ? props.color : props.theme.color.black};
    `
const Select: FC<SelectType> = ({radius , width, height, color, placeholder}) => {

   return (
       <>
         <StyledSelect width={width} radius={radius} height={height} color={color} placeholder={placeholder}/>
       </>
   );
}

export default Select;