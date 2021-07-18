import React, { useEffect } from 'react';
import styled from 'styled-components';
//images
import ImagesSlider from '../components/ImagesSlider';
import MoviesList from '../components/MoviesList';
import Viewers from '../components/Viewers';
// firebase
import db from '../Firebase'
//redux
import {auth} from '../Firebase';
import {useDispatch, useSelector} from 'react-redux';
import singin from '../redux/actions/singin';
import getMovies from '../redux/actions/getMovies';
const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(store => store.userInfo);
    console.log(data)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(singin(user));
            }
        });
        db.collection('movies').onSnapshot((snap) => {
            let info = snap.docs.map(movie => {
                return {id:movie.id, ...movie.data()}
            })
            dispatch(getMovies(info))
        });

    },[dispatch])


    return (
        <CONTAINER>
            <ImagesSlider />
            <Viewers />
            <MoviesList/>
        </CONTAINER>
    )
};
const CONTAINER =styled.main`
    overflow-x :hidden;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    &:before{
        content:'';
        background-image: url('./home-background.png');
        background-repeat:no-repeat;
        background-size:cover;
        background-position: center;
        background-attachment: fixed;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
`;
export default Home
