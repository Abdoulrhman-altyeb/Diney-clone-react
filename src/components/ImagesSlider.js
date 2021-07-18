import React from 'react';
// styles
import styled from 'styled-components';
// slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// images
import image1 from '../assits/images/slider-badag.jpg';
import image2 from '../assits/images/slider-badging.jpg';
import image3 from '../assits/images/slider-scale.jpg';
import image4 from '../assits/images/slider-scales.jpg';

const ImagesSlider = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={image1} alt='image1' />
            </Wrap>
            <Wrap>
                <img src={image2} alt='image2' />
            </Wrap>
            <Wrap>
                <img src={image3} alt='image3' />
            </Wrap>
            <Wrap>
                <img src={image4} alt='image4' />
            </Wrap>
        </Carousel>
    )
}

// rgb(0 0 0 / 69% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
const Carousel = styled(Slider)`
    margin-top:20px;
    

    .slick-list{
        overflow: visible;
    }

    li.slick-active button:before{
        color:white;
    }

    li button::before{
        color:white;
    }

    button{
        z-index:1;
    }

    .slick-arrow:before{
        color:transparent;
    }
`;
const Wrap = styled.div`
    img{
        width:100%;
        height:100%;
        box-shadow:rgb(0 0 0 / 69% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition: border 250ms ease-in-out;
        cursor:pointer;
        &:hover{
            border:4px solid lightgray;
        }
    }

`;
export default ImagesSlider
