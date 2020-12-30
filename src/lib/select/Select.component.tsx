import { FC, Fragment } from "react";
import styled from "styled-components";


type SelectType = {
  options?: string[],
  width?: string,
  height?: string,
  radius?: string,
  color?: string
}

    const StyledSelect = styled.select<SelectType>`
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    border: none;
    margin: 0 5px 0 5px;
    outline: none;
    border-radius: ${props => props.radius ? props.radius : "6px"}; 
    color: ${props => props.color ? props.color : props.theme.color.black};
    `
const Select: FC<SelectType> = ({options, radius , width, height, color}) => {

   return (
       <>
         <StyledSelect width={width} radius={radius} height={height} color={color}>
           {options?.map((option, i) => {
   console.log(option)
             return (
               <Fragment key={i}>
                   <option value={option}>{option}</option>
               </Fragment>
             )
})}
            
         </StyledSelect>
       </>
   );
}

export default Select;