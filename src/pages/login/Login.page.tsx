import { FC, ReactElement } from "react";
import styled from "styled-components";
import fb from "../../assets/images/facebook.svg";
import google from "../../assets/images/search.svg";
import apple from "../../assets/images/apple.webp";
import Button from "../../lib/button/Button.component";

const Wrap = styled.div`
width: 35%;
margin: 40px auto;
text-align: center;
`
const Headline = styled.div`
font-size: 2.5em;
font-weight: bold;
margin-bottom: 30px;
`
const LoginWithThirdParty = styled.button`
outline: none;
width: 100%;
border-radius: 3px;
border: 1px solid #e9e9e9;
background-color: transparent;
height: 45px;
margin-top: 10px;
&:hover {
  border: 0.4px solid #d3d3d3;
 background-color: #f9feff;
 transition: 0.4s;
}
`
const ButtonValue = styled.span`
position: relative;
top: -4px;
`
const SocialIcon = styled.img`
width: 20px;
height: auto;
margin: 5px 10px 0 0;
` 
const Or = styled.div`
margin-top: 15px;
`
const Email = styled.input`
outline: none;
width: 100%;
border-radius: 3px;
border: 1px solid #e9e9e9;
background-color: transparent;
height: 45px;
margin: 10px auto;
padding-left: 15px;
box-sizing: border-box;
&::placeholder {
  color: #afafaf;
}
&:focus {
  border: 1px solid #e9e9e9;
  transition: 0.4s;
}
&:hover {
 border: 0.4px solid #d3d3d3;
 background-color: #f9feff;
 transition: 0.4s;
}
` 
const Disclaimer = styled.div`
font-size: 0.8em;
width: 80%;
margin: 10px auto;
color: #929292;
`
const U = styled.u`
cursor: pointer;
`

type LoginType = {
  children?: ReactElement,  
}

const Login: FC<LoginType> = () => {
   return (
       <>
        <Wrap>
          <Headline>Login</Headline>
          <LoginWithThirdParty><SocialIcon src={fb}/><ButtonValue>Continue with Facebook</ButtonValue></LoginWithThirdParty>
          <LoginWithThirdParty><SocialIcon src={google}/><ButtonValue>Continue with Google</ButtonValue></LoginWithThirdParty>
          <LoginWithThirdParty><SocialIcon src={apple}/><ButtonValue>Continue with Apple</ButtonValue></LoginWithThirdParty>
          <Or>OR</Or>
          <Email placeholder="Email"/>
          <Disclaimer>
            This site is protected by reCAPTCHA and the Google <U>Privacy Policy</U> and <U>Terms of service</U> apply.
          </Disclaimer>
          <Button value="Continue" width="100%" margin="10px 0 0 0"/>
          <Disclaimer>
            <U>Forgot password?</U> &#183; <U>Don't have an account?</U>
          </Disclaimer>
        </Wrap>
       </>
   );
}

export default Login;