import { FC } from "react";
import styled from "styled-components";


type InputType = {
  width?: string,
  height?: string,
  radius?: string,
  color?: string,
  placeholder?: string
}

    const StyledInput = styled.button<InputType>`
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    border: none;
    outline: none;
    color: ${props => props.color ? props.color : props.theme.color.black};
    `
const Input: FC<InputType> = ({radius , width, height, color, placeholder}) => {

   return (
       <>
         <StyledInput width={width} radius={radius} height={height} color={color} placeholder={placeholder}/>
       </>
   );
}

export default Input;