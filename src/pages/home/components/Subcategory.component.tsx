import { FC, Fragment, ReactElement, useState } from "react";
import styled from "styled-components";



const SubcategoriesWrap = styled.div`
margin: 3px;
`


type SubcategoryType = {
  name: string
}

const Subcategory: FC<SubcategoryType> = ({name}) => {
   const [checked, setChecked] = useState(false);
   return (
       <>
            <SubcategoriesWrap onClick={(): void => {
              setChecked(!checked)
            }}>
                {/* <Checkbox checked={checked} type="checkbox" onChange={(e):void => {
                  setChecked(!checked)
                }}/> */}
                                      <label className="container">{name}
                                            <input type="checkbox"></input>
                                            <span className="checkmark"></span>
                                      </label>
                {/* <Subcat>{name}</Subcat> */}
            </SubcategoriesWrap>
       </>
   );
}


export default Subcategory;