
import { doc, getDoc, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../firebase';



function Detail() {

  const { id } = useParams();
  console.log("id", id);

  const collectMovie = doc(db, 'movies', id);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getDoc(collectMovie);
      if (movieData.exists()) {
        setDetail(movieData.data());
        console.log("Document data:", movieData.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    }

    getMovie();
  }, [id])

  console.log("single page detail", detail)

  return (
    <Container>

      <BackgroundImg>
        <img src={detail.backgroundImg} />
      </BackgroundImg>
      <TitleImg>
        <img src={detail.cardImg} />
      </TitleImg>
      <ControlsButton>

        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>

        </PlayButton>

        <TrailerButton>

          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>

        </TrailerButton>

        <AddButton>

          <span>+</span>

        </AddButton>

        <GroupButton>

          <img src="/images/group-icon.png" />

        </GroupButton>

      </ControlsButton>

      <Subtitle>
        {detail.subTitle}
      </Subtitle>

      <Description>
        {detail.description}
      </Description>

    </Container>
  )
}

const Container = styled.div`
  position : relative;
  top : 72px;
  min-height : Calc(100vh - 70px);
  overflow-x : hidden;
  display:block;
  padding: 0 calc(3.5vw + 5px);
  // opacity:0.8;
  

 
`
const BackgroundImg = styled.div`

img{
   {
    position:fixed;
    background: center center / cover no-repeat fixed;
    inset:0;
    // content:"";
    z-index:-1;  
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-position : top;
    width:100%;
    height:100%;
    
  
  }

}
`

const TitleImg = styled.div`
height:32vh;
width:30vw;
min-height:170px;
min-width:200px;
margin-top:40px;

img{
  width:100%;
  height:100%
  object-fit:contain;
}

`

const ControlsButton = styled.div`
display:flex;
align-items:center;
z-index:2;

`
const PlayButton = styled.button`
 border-radius:4px;
 font-size:15px;
 display:flex;
 padding: 0px 24px;
 margin-right:22px;
 align-items:center;
 height:56px;
 background: rgb(249,249,249);
 border:none;
 letter-spacing:1.8px;
 cursor:pointer;

 img{
  width:32px;
 }
 
 



 @media (max-width:768px){
  height:45px;
  font-size:12px;
  img{
    width:25px;
  }
 }

`

const TrailerButton = styled(PlayButton)`
background :rgb(0,0,0, 0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);



`

const AddButton = styled.button`
background: rgb(0,0,0,0.3);
height:44px;
width:44px;
border-radius:50%;
border:none;
margin-right:22px;
cursor:pointer;
span{
  font-size:35px;
  color:rgb(249,249,249);
}

&: hover{
  background:rgb(180,180,180);
}

`

const GroupButton = styled.button`
background: rgb(0,0,0,0.3);
heigh:44px;
width:44px;
border-radius:50%;
border:none;
margin-right:22px;
cursor:pointer;

img{
  width:36px;
}

&: hover{
  background:rgb(180,180,180);
}

`

const Subtitle = styled.p`
margin-top:25px;
font-size:13px;

`
const Description = styled.p`
line-height:21px;

`


export default Detail