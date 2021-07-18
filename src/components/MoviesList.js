import React from 'react'
import styled from 'styled-components';
//redux
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const MoviesList = () => {

    const data = useSelector(store => store.Movies.Movies);
    return (
        <CONTAINER>
            <h2>Recommended for you </h2>
            <Wrapper>
                {data && data.map(movie => (
                    <Card key={movie.id} to={`/details/${movie.id}`}>
                        <img src={movie.cardImg} alt='movie' />
                    </Card>
                ))}
            </Wrapper>
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
    margin-top:2rem;
    display: flex;
    flex-direction:column;
    font-family:sans-serif;
`;
const Wrapper = styled.div`
    margin-top:2rem;
    margin-bottom:3rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(100px,1fr));
    gap:2rem;
`;
const Card = styled(Link)`
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    border:1px solid #555;
    box-shadow:rgb(0 0 0 / 60% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 15px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    &:hover{
        transform: scale(1.05);
        border:1px solid white;
        box-shadow:rgb(0 0 0 / 85% ) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 15px -10px;
        img{
            transform: scale(1.15);
            object-fit: cover;
        }
    }
    img{
        width:100%;
        display: block;
        object-fit: cover;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    }
`;

export default MoviesList
