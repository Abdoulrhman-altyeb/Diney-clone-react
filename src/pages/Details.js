import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
// styles
import styled from 'styled-components';
import {BsPlayFill} from 'react-icons/bs';
import {IoMdPeople} from 'react-icons/io'
//redux 
import db from '../Firebase';

const Details = () => {


    const [movie, setMovie] = useState();
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) =>{
            if(doc.exists){
                setMovie(doc.data());
            }else {
                history.push("/")
            }
        })
    },[history, id])


    return (
        
        <CONTAINER>
            {movie && 
            <>
                <BackgroundImage>
                    <img src={movie.backgroundImg} alt='movie' />
                </BackgroundImage>
                <MovieLogo>
                    <img src={movie.titleImg} alt=""/>
                </MovieLogo>
                <Controls>
                    <PlayButton>
                        <BsPlayFill/>
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <BsPlayFill/>
                        <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        +
                    </AddButton>
                    <FriendButton>
                        <IoMdPeople/>
                    </FriendButton>
                </Controls>
                <MovieDate>
                {movie.subTitle}
                </MovieDate>
                <MovieDescription>
                    {movie.description}
                </MovieDescription>
            </>
            }   
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
    min-height:calc(100vh - 70px);
    padding: 1rem calc(3.5vw + 5px);
    position: relative;
`;

const BackgroundImage = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;
        opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`;
const MovieLogo = styled.div`
    width:30vw;
    min-width:300;
    margin-bottom:2rem;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`;
const Controls = styled.div`
    display: flex;
    align-items:center;
`;
const PlayButton = styled.button`
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    text-transform:uppercase;
    margin-right:1.4rem;
    background:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    display: flex;
    padding:0.4rem 1.5rem;
    font-size:1rem;
    cursor: pointer;
    border-radius: 4px;
    svg{
        font-size:2rem;
    }
    &:hover{
        background:#ccc
    }
`;
const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    color:white;
    border:2px solid white;
    svg{
        color:white;
    }
    &:hover{
        background:rgba(0,0,0,0,0.4)
    }
`;
const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    width:40px;
    height:40px;
    border-radius:50%;
    font-size:1.2rem;
    cursor:pointer;
    color:white;
    border:2px solid white;
    background:rgba(0,0,0,0.5);
    margin-right:1rem;
    font-weight:900;
`;
const FriendButton = styled(AddButton)`
    background:rgba(0,0,0,0.9);
    
`;

const MovieDate = styled.div`
    color:rgba(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:20px;
`;

const MovieDescription = styled.div`
    line-height:1.4;
    font-size:20;
    color:rgba(249,249,249);
    margin-top:1rem;
    max-width:800px;
`;

export default Details
