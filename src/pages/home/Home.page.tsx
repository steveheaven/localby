import { FC, ReactElement, ReactHTMLElement } from "react";
import styled from "styled-components";
import pouring from "../../assets/videos/pouring.mp4";
import Sidebar from "../../layout/Sidebar.component";
import Divider from "../../lib/divider/Divider.component";

const MaxWidth1200Px = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
`
const VideoWrap = styled.div`
background-color: ${props => props.theme.color.black};
color: white;
height: 300px;
overflow: hidden;
`
const Video = styled.video`
/* background-color: red; */
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
       <VideoWrap>
          <Video height="200" autoPlay muted preload="true" loop>
              <source src={pouring} type="video/mp4" />
              Your browser does not support the video tag.
         </Video>
       </VideoWrap>
         <Divider type="horizontal" />
        <MaxWidth1200Px>
          <Sidebar></Sidebar>
        </MaxWidth1200Px>
       </>
   );
}

export default Home;