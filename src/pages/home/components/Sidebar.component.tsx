import { FC, Fragment, ReactElement } from "react";
import styled from "styled-components";
import categories from "../../../constants/categories";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setCategory } from "../../../redux/actions/category.action";
import Subcategory from "./Subcategory.component";

const SidebarWrap = styled.div`
/* background-color: red; */
width: 330px;
height: auto;
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
padding: 10px;
box-sizing: border-box;
box-shadow: 1px 1px 4px 1px grey;
`
const Category = styled.div<{active?: boolean}>`
color: ${props => props.theme.color.black};
font-size: ${props => props.active ? "1.1em" : "0.9em"};
font-weight: ${props => props.active ? "bold" : "normal"};
margin-top: 5px;
margin-left: 40px;
&:hover {
font-weight: bold;
transition: 0.2s;
}
`
const Icon = styled.span<{visible: boolean}>`
width: 20px;
height: 20px;
position: relative;
margin-right: 10px;
top: -5px;
float: left;
${props => props.visible ? null : "display: none;" }
`
const Image = styled.img`
height: auto;
width: 27px;
/* filter: invert(100%); */
`
const Redirect = styled.div`
color: white;
cursor: pointer;
`
const SubcategoriesWrap = styled.div`
margin: 7px;
`
const Hr = styled.hr`
width: 90%;
margin: 20px auto;
border: 0.5px solid #b3b3b3;
`

type SidebarType = {
  activeCategory: {category: string},
  setCategory: (category: string) => void,
}

const Sidebar: FC<SidebarType> = ({setCategory, activeCategory}) => {
  const {t} = useTranslation();
   return (
       <>
       <SidebarWrap>
         {categories?.map((category, i) => {
             return (
                 <Fragment key={i}>
                     <Redirect onClick={() => {
                           setCategory(category.name)
                         }}>
                        <Icon visible={activeCategory.category === category.name}><Image src={category.icon_green} /></Icon>
                        <Category active={activeCategory.category === category.name}>{t(category.name)}</Category>
                     </Redirect>
                     <SubcategoriesWrap>
                     {activeCategory.category === category.name ? category.subcategories.map((sub, i) => {
                              return (
                                <Fragment key={i}>
                                    <Subcategory name={sub} />
                                </Fragment>
                              )
                            }) : null}
                      </SubcategoriesWrap>
                 </Fragment>
             );
         })}
        <Hr/>
        Heyy:
       </SidebarWrap>
       </>
   );
}

const mapStateToProps = (state: any) => ({
   activeCategory: state.category
});

export default connect(mapStateToProps, { setCategory })(Sidebar);