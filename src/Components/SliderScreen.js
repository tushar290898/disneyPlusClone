import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function SliderScreen() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (

        <Carousel {...settings} >
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" />
                </a>
            </Wrap>


        </Carousel>


    )
}

const Carousel = styled(Slider)`
margin-top:20px;

& > button {
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;
}

& : hover{
    opacity:1;
    transition : 0.2s ease 0s;
}

ul li button {
    &:before{
        font-size:12px;
        color:rgb(150,158,171);
    }
}

li.slick-active button:before{
    color:white;
}
.slick-list {
    overflow: initial;
}

// .slick-prev{
//     left:-75px
// }

`

const Wrap = styled.div`
a{
    border-radius : 5px;
    cursor:pointer;
}

img{
    width:100%;
    height:100%;
}



&:hover {
    border: 3px solid;
    border-color:white;
    padding:0;
   
}
`




export default SliderScreen