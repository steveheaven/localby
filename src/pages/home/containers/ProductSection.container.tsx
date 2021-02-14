import { FC, ReactElement, ReactHTMLElement } from "react";
import styled from "styled-components";
import mockImg from "../../../assets/images/pexels-andreas-william-3010771.jpg"
import mockProfileImg from "../../../assets/images/pexels-kaboompics-com-6258.jpg"
import StarRatingComponent from 'react-star-rating-component';
import Button from "../../../lib/button/Button.component";

const Wrap = styled.span`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: fit-content;
/* background-color: red; */
` 
const CardWrap = styled.div`
width: 275px;
justify-content: space-between;
height: 450px;
margin: 0 5px 5px 5px;
border-radius: 6px;
/* padding: 10px; */
box-sizing: border-box;
box-shadow: 1px 1px 4px 1px grey;
`
const Image = styled.div<{src: string}>`
background-image: url(${props => props.src ? props.src : null});
width: 100%;
border-radius: 6px 6px 0 0;
height: 45%;
background-repeat: no-repeat;
background-size: cover;
`
const CardBody = styled.div`
width: 100%;
border-radius: 0 0 6px 6px;
height: 55%;
padding: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
`
const CartBox = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: space-between;
`
const CardBoxContainer = styled.div `
width: 49%;
`
const OtherProductsBox = styled.div `
width: 50%;
display: flex;
padding-left: 5px;
`
const ProductName = styled.div`
font-weight: bold;
color: ${props => props.theme.color.black};
margin-bottom: 5px;
`
const ProductDescription = styled.div`
color: ${props => props.theme.color.black};
font-size: 1em;
margin-bottom: 10px;
`
const Seller = styled.div`
color: ${props => props.theme.color.main};
font-size: 1.5em;
`
const RatingWrap = styled.span`
padding-top: 10px;
/* background-color: red; */
`
const VotesCount = styled.span`
color: #9c9c9c;
font-size: 0.8em;
margin: 0 0 0 5px;
position: relative;
top: -5px;
`
const Price = styled.div`
color: ${props => props.theme.color.main};
float: right;
font-size: 1.3em;
position: relative;
top: 16px;
font-weight: bold;
`

type ProductSectionType = {
  children?: ReactElement,  
}

const ProductSection: FC<ProductSectionType> = ({children}) => {
   let mockedProducts = [];
   for (let i = 0; i < 60; i++) {
      mockedProducts.push({
        productName: "Plates",
        description: "Brown plate, radius 30cm, hand made for regular use",
        seller: "John Doe",
        sellerProfileImage: "path",
        nationality: "GB",
        category: "home",
        rating: 4.6,
        votesCount: 6799,
        price: 30,
        currency: "USD"
      });
   }

   return (
       <>
         <Wrap>
           {mockedProducts.map((el) => {
              return (
                <CardWrap>
                  <Image onMouseOver={() => {

                  }} src={mockImg}/>
                  <CardBody>
                    <ProductName>{el.productName}</ProductName>
                    <ProductDescription>{el.description}</ProductDescription>
                    <Seller>{el.seller}</Seller>
                    <RatingWrap>

                              <StarRatingComponent 
                                      name="rate1" 
                                      starCount={5}
                                      value={4.8}
                                      onStarClick={() => {
                                        
                                      }}
                                      emptyStarColor="#DBDBDB"
                                      starColor="#f3cc1f"
                              />
                    </RatingWrap>
                    <VotesCount>({el.votesCount})</VotesCount>

                      <Button value="Other products" radius="40px" height="23px" width="150px" inverted/>

                    <CartBox>
                      <CardBoxContainer>
                        <Button value="Put into cart" margin="13px 0 0 0" radius="50px" width="150px" height="25px"/>
                      </CardBoxContainer>
                      <CardBoxContainer>
                        <Price>${el.price}</Price>
                      </CardBoxContainer>
                    </CartBox>
                  </CardBody>
                </CardWrap>
              )
            })}
          </Wrap>
        </>
    );
}

export default ProductSection;