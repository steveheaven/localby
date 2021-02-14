import { FC, ReactElement } from "react";
import styled from "styled-components";
import pouring from "../../assets/videos/pouring.mp4";
import Sidebar from "./components/Sidebar.component";
import Divider from "../../lib/divider/Divider.component";
import ProductCard from "./containers/ProductSection.container";

const MaxWidth = styled.div`
/* max-width: ${props => props.theme.maxWidth}; */
width: 100%;
display: flex;
flex-direction: row;
justify-content: start;
`
const VideoWrap = styled.div`
/* background-color: ${props => props.theme.color.black}; */
height: 300px;
overflow: hidden;
  position: relative;
  &:after {
    content: '';
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	background-image: radial-gradient(black 33%, transparent 33%);
	background-size: 4px 4px;
  }
`
const Headline = styled.div`
color: rgb(255, 255, 255);
z-index: 1000;
position: absolute;
font-size: 3em;
top: 215px;
font-weight: bold;
width: 40%;
`
const SubHeadline = styled.div`
color: rgb(255, 255, 255);
z-index: 1000;
/* position: absolute; */
font-size: 0.4em;
/* top: 5px; */
margin-top: 5px;
font-weight: normal;
width: 180%;
`
const Video = styled.video`
background-color: #608b5b;
height: auto;
width: 100%;
background-size: cover;
`

type HomeType = {
  children: ReactElement,  
}

const Home: FC<HomeType> = ({children}) => {
  
   return (
       <>
       <MaxWidth>
         <Headline>Buy directly from the local merchants

           <SubHeadline>and support your friends and many others around you or help with delivery and earn cash!</SubHeadline>
         </Headline>
         
       </MaxWidth>
       <VideoWrap>
          <Video height="200" autoPlay muted preload="true" loop>
              <source src={pouring} type="video/mp4" />
              Your browser does not support the video tag.
         </Video>
       </VideoWrap>
         <Divider type="horizontal" />
        <MaxWidth>
          <Sidebar></Sidebar>
          <ProductCard/>
        </MaxWidth>
       </>
   );
}

export default Home;