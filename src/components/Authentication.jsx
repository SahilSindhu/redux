import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { logOut, logIn } from '../state/action/auth';

const Authentication = ()=>{
    const isAuthenticated = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log('Authencatuion rendered');
    })
    const handelAuthentication =() =>{
        isAuthenticated? dispatch(logOut()): dispatch(logIn());
    }
    return <div onClick={handelAuthentication}>{isAuthenticated? 'welcome' : 'please log in'}</div>
}

export default Authentication;