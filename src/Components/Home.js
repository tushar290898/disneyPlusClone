import { async } from '@firebase/util';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { selectUserName } from '../features/Users/userSlice';
import { db } from '../firebase';
import Newdisney from './Newdisney';
import Recommendation from './Recommendation';
import SliderScreen from './SliderScreen';
import Trendings from './Trendings';
import Viewers from './Viewers';

import {setNewMovies} from '../features/Movies/movieSlice'



function Home() {

const dispatch = useDispatch();


 let recommends = [];
 let newDisneys =[];
 let  trendings=[];
 
 const movieCollection = collection(db, "movies");

  useEffect(() => {
    const getMovies = async () =>{
      const data = await getDocs(movieCollection);
      console.log("data",data.docs)
      data.docs.map((doc)=>{
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            console.log("recommend", recommends)
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }]
        }

        dispatch(setNewMovies({
          recommend : recommends,
          newDisney : newDisneys,
          trending  : trendings,
        }));
        

    })
    }

    getMovies();

  },[])




  return (
    <Container>
      <SliderScreen />
      <Viewers />
      <Recommendation />
      <Newdisney />
      <Trendings />
    </Container>
  )
}

const Container = styled.main`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
top:72px;
display:block;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    opacity:1;
    z-index:-1;
    top:0;
    left:0;
    right:0;
    bottom:0;
}


`

export default Home