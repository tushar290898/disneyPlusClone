import React from 'react'
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectTrending } from '../features/Movies/movieSlice';



function Trendings() {
    const trendingMovies = useSelector(selectTrending);
  
    return (
        <Container>
            <h4>Trendings</h4>
            <Content>

                {
                  trendingMovies &&  trendingMovies.map((movie) => (

                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>



                    ))
                }


            </Content>

        </Container>
    )
}

const Container = styled.div`
        margin-top:10px;
        
       

`
const Content = styled.div`
     padding: 20px 0 26px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4, minmax(0, 1fr));

    @media (max-width:768px){
        grid-template-columns:repeat(2, minmax(0, 1fr));
    }

`


const Wrap = styled.a`

border-radius:4px;
border: 2px solid;
border-color:white;
cursor:pointer;

img{
    width:100%;
    height:100%;
    
}


`

export default Trendings