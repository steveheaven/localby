import { FC } from "react";
import styled from "styled-components";


type ButtonType = {
  value?: string,
  bgColor?: string,
  width?: string,
  height?: string,
  radius?: string,
  color?: string,
  inverted?: boolean,
  margin?: string
}

    const StyledButton = styled.button<ButtonType>`
    background-color: ${props => {
        if (props.bgColor) {
         return props.bgColor;
       } else if (!props.inverted) {
             return props.theme.color.main;
       } else {
         return "white";
       }
    }};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "40px"};
    border: ${props => props.inverted ? `1px solid ${props.theme.color.main}` : "none"};;
    outline: none;
    border-radius: ${props => props.radius ? props.radius : "6px"}; 
    color: ${props => {
      if (props.inverted && !props.color) {
        return props.theme.color.main;
      } else if (props.color) {
        return props.color;
      } else {
        return "white"
      }
    }};
    ${props => props.margin ? `margin: ${props.margin};` : null}
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.inverted ? "transparent" : "#277056"};
      transition: 0.4s;
      box-shadow: 1px 1px 5px 0.5px ${props => props.theme.color.main};
    }
    `
const Button: FC<ButtonType> = ({value, radius , width, height, color, inverted, bgColor, margin}) => {

   return (
       <>
         <StyledButton width={width} radius={radius} height={height} color={color} inverted={inverted} bgColor={bgColor} margin={margin}>{value}</StyledButton>
       </>
   );
}

export default Button;