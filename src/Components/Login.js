import React from 'react'
import styled from 'styled-components'


function Login() {

  return (
    <Container>
      <Content>
        <LCO>
          <LCOLogoOne src="/images/cta-logo-one.png" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon
            for an additional fee with a Disney + subscription.
            As of 03/26/22, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <LCOLogoTwo src="/images/cta-logo-two.png" />
        </LCO>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
display : flex;
flex-direction : column;   
text-align : center;
height : 110vh;
`
const Content = styled.div`
margin-bottom : 10vh;
width : 100%;
position : relative;
min-height : 100vh
box-sizing : border-box;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
padding : 80px 40px;
height : 100%;


`
const BgImage = styled.div`
background-image : url("/images/login-background.jpg");
height : 110vh;
background-position : top;
background-size : cover;
background-repeat : no-repeat;
position : absolute;
z-index : -1;
top :0;
right : 0;
left : 0;
`

const LCO = styled.div`
max-width : 650px;
display : flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`
const LCOLogoOne = styled.img`
display : block;
max-width : 600px;
margin-bottom : 20px;
min-height:2px;
width: 100%;

`

const SignUp = styled.a`
font-weight : bold;
color : #f9f9f9;
background-color : #0063e5;
width : 100%;
letter-spacing : 1.5px;
margin-bottom : 12px;
font-size : 18px;
padding : 16.5px 0;
border-radius:4px;
border: 1px solid transparent;

&:hover{
    background-color:#0483ee;
}

cursor:pointer;
`

const Description = styled.p`
font-size : 12px;
letter-spacing : 1px;
line-height: 1.5em;
`

const LCOLogoTwo = styled.img`
max-width : 600px;
width: 100%;
min-height:2px;
`
export default Login