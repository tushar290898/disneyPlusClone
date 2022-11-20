import React from 'react'
import styled from 'styled-components';


function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png"/>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    margin-top:30px;
    padding: 30px 0 26px;
    display:grid; 
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(5, minmax(0 , 1fr));

    @media (max-width: 768px){
        grid-template-columns:repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.a`
    border-radius:4px;
    border:2px solid;
    border-color:lightgrey;
    cursor:pointer;
    
     img{
        inset:0;
        width:100%;
        height:100%;
    }
    


`

export default Viewers