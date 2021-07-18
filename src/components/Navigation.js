import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
//images
import logo from '../assits/images/logo.svg';
import home from '../assits/images/home-icon.svg';
import search from '../assits/images/search-icon.svg';
import watchlist from '../assits/images/watchlist-icon.svg';
import original from '../assits/images/original-icon.svg';
import movies from '../assits/images/movie-icon.svg';
import series from '../assits/images/series-icon.svg';
//firebase
import {auth,provider} from '../Firebase';
//redux
import singin from '../redux/actions/singin';
import singout from '../redux/actions/singout';
import { useSelector, useDispatch } from 'react-redux';
const Navigation = () => {



    const history = useHistory();
    const UserD = useSelector(store => store.userInfo);
    const name = UserD.name;
    const dispatch = useDispatch();





    const SINGIN = () => {
        auth.signInWithPopup(provider)
        .then(user => {
            dispatch(singin(user.user));
            history.push('/home')
        }).catch((err) => {
            console.log(err)
        })
    }

    const SINGOUT = () => {
        auth.signOut()
        .then(() => {
            dispatch(singout());
            history.push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <CONTAINER>
            <Logo src={logo} alt='logo'/>
            {!name ? (
                <LoginContainer>
                    <Login onClick={SINGIN}>
                        Login
                    </Login>
                </LoginContainer>

            ) : 
                <>
                    <NavList>
                        <button>
                            <img src={home}  alt='icon'/>
                            <span>HOME</span>
                        </button>
                        <button>
                            <img src={search}  alt='icon'/>
                            <span>SEARCH</span>
                        </button>
                        <button>
                            <img src={watchlist}  alt='icon'/>
                            <span>WATCHLIST</span>
                        </button>
                        <button>
                            <img src={original}  alt='icon'/>
                            <span>ORIGINAL</span>
                        </button>
                        <button>
                            <img src={movies}  alt='icon'/>
                            <span>MOVIES</span>
                        </button>
                        <button>
                            <img src={series} alt='icon'/>
                            <span>SERIES</span>
                        </button>
                    </NavList>
                    <UserName src={UserD.photo} alt='Profile image' onClick={SINGOUT}/>
                </>
            }
         
        </CONTAINER>
    )
}
const CONTAINER = styled.div`
    display:flex;
    align-items:center;
    height:70px;
    background:#090b13;
    padding:0 1rem;
`;

const Logo = styled.img`
    width:80px;
`;

const NavList= styled.div`
    display:flex;
    align-items:center;
    flex:1;
    margin-left:1.4rem;
    align-items:center;
    color:white;
    button{
        border:none;
        background:transparent;
        color:white;
        padding:0 10px;
        cursor:pointer;
        display:flex;
        align-items:center;
        img{
            width:20px;
        }
        span{
            position:relative;
            font-size:13px;
            letter-spacing:1px;
            padding:0 5px;
            &:after{
                content:'';
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom: -6px;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform-origin:left center;
                transform: scaleX(0);
                opacity:0;
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`;

const UserName = styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    object-fit:cover;
    cursor:pointer;
`;

const Login = styled.div`
width:6rem;
    border:1px solid white;
    padding:0.4rem 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:all 250ms ease-in-out;
    cursor:pointer;
    font-family: sans-serif;

    &:hover{
        background:white;
        color:black;
    }
`;
const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;
`;

export default Navigation;
