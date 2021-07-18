import React from 'react'
// styles
import styled from 'styled-components';
//images
import view1 from '../assits/images/viewers-marvel.png';
import view2 from '../assits/images/viewers-starwars.png';
import view3 from '../assits/images/viewers-disney.png';
import view4 from '../assits/images/viewers-pixar.png';
import view5 from '../assits/images/viewers-national.png';
// videos 
import vid1 from '../assits/videos/1564674844-disney.mp4';
import vid2 from '../assits/videos/1564676115-marvel.mp4';
import vid3 from '../assits/videos/1564676296-national-geographic.mp4';
import vid4 from '../assits/videos/1564676714-pixar.mp4';
import vid5 from '../assits/videos/1608229455-star-wars.mp4';


const Viewers = () => {

    const handelPlay = (e) => {
        // e.currentTarget.play();
            e.currentTarget.children[1].play();
    }
    const handelPause=  (e) => {
        // e.currentTarget.pause();
        e.currentTarget.children[1].pause();
    }

    return (
        <CONTAINER>
            <Wrap onMouseOver={handelPlay} onMouseOut={handelPause}>
                <img src={view1} alt='logos'/>
                <video width="750" height="500" loop autoPlay>
                <source src={vid2} type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap onMouseOver={handelPlay} onMouseOut={handelPause}>
                <img src={view2} alt='logos'/>
                <video width="750" height="500" loop autoPlay>
                <source src={vid5} type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap onMouseOver={handelPlay} onMouseOut={handelPause}>  
                <img src={view3} alt='logos'/>
                <video width="750" height="500" loop autoPlay>
                <source src={vid1} type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap onMouseOver={handelPlay} onMouseOut={handelPause}>
                <img src={view4} alt='logos'/>
                <video width="750" height="500" loop autoPlay>
                <source src={vid4} type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap onMouseOver={handelPlay} onMouseOut={handelPause}>
                <img src={view5} alt='logos'/>
                <video width="750" height="500" loop autoPlay>
                <source src={vid3} type="video/mp4"/>
            </video>
            </Wrap>
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
    display:grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    gap:1rem;
    padding:30px 0px;
    margin-top:25px;

    @media only screen and (max-width:900px) {
        grid-template-columns: 1fr;
    }

`;

const Wrap = styled.div`
    border:3px solid #555;
    overflow: hidden;
    position:relative;
    border-radius: 8px;
    box-shadow:rgb(0 0 0 / 69% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor:pointer;
    img{
        width:100%;
        display: block;
    }
    video{
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        width:100%;
        height: 100%;
        display: block;
        position: absolute;
        top:0;
        z-index: -1;
        opacity: 0;
    }
    &:hover{
        transform:scale(1.05);
        box-shadow:rgb(0 0 0 / 85% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 15px -10px;
        border: 3px solid lightgray;
        
        video{
            opacity: 1;
        }
    }
`;
export default Viewers
