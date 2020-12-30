import { FC } from "react";
import styled from "styled-components";


type ButtonType = {
  value?: string,
  width?: string,
  height?: string,
  radius?: string,
  color?: string
}

    const StyledButton = styled.button<ButtonType>`
    background-color: ${props => props.theme.color.main};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "40px"};
    border: none;
    outline: none;
    border-radius: ${props => props.radius ? props.radius : "6px"}; 
    color: ${props => props.color ? props.color : "white"};
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    `
const Button: FC<ButtonType> = ({value, radius , width, height, color}) => {

   return (
       <>
         <StyledButton width={width} radius={radius} height={height} color={color}>{value}</StyledButton>
       </>
   );
}

export default Button;