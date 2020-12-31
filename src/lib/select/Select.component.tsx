import { ChangeEvent, FC, Fragment, useState } from "react";
import styled from "styled-components";


type SelectType = {
  options?: string[],
  width?: string,
  height?: string,
  radius?: string,
  color?: string,
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
  value?: string
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
const Select: FC<SelectType> = ({options, radius , width, height, color, onChange, value}) => {
   return (
       <>
         <StyledSelect width={width} radius={radius} height={height} color={color} onChange={onChange} value={value}>
           {options?.map((option, i) => {
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