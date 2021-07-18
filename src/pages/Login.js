import React, { useEffect } from 'react';
//styles
import styled from 'styled-components';
//images
import logo1 from '../assits/images/cta-logo-one.svg';
import logo2 from '../assits/images/cta-logo-two.png';
//redux
import {auth} from '../Firebase';
import { useDispatch } from 'react-redux';
import singout from '../redux/actions/singout';

const Login = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        auth.signOut()
        .then(() => {
            dispatch(singout());
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <CONTIANER>
            <CTA>
                <CTALINKSONE src={logo1} alt='cta logo'/>
                <BUTTON>GET ALL THREE FOR FREE $12.99 /MONTH</BUTTON>
                <PremiumACC>
                Disney Plus Premier Access is a purchase option for Disney Plus subscribers, enabling members to pay an extra $30 one-time fee to gain early streaming access to a movie that's still playing in theaters.
                </PremiumACC>
                <CTALINKTWO  src={logo2} alt='cta logo'/>
            </CTA>
        </CONTIANER>
    )
}


const CONTIANER = styled.div`
    min-height:calc(100vh - 70px);
    background-image: url('./login-background.jpg');
    background-position: top;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    max-width:600px;
    width:100%;
`;
const CTALINKSONE = styled.img`
    width:100%;
`;
const CTALINKTWO = styled.img`
    width:100%;
`;
const BUTTON =styled.button`
    background:#0063e5;
    color:white;
    border:none;
    padding:1rem;
    border-radius: 4px;
    font-size:0.95rem;
    letter-spacing: 1px;
    margin-top:1rem;
    margin-bottom:2rem;
    cursor:pointer;
    &:hover{
        background:#0063c8;
    }
`;

const PremiumACC = styled.div`
text-align:center;
font-size:0.7rem;
margin-bottom:1rem;
color:whitesmoke;
letter-spacing: 1px;
font-family: sans-serif;

`;

export default Login
