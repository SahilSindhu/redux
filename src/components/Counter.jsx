import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../state/action/counter';

const Counter = ()=>{
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log('Counter rendered');
    })

    return <div>
                    <button onClick={()=>dispatch(decrement())}>-</button>
                             Counter:{counter}
                    <button onClick={()=>dispatch(increment(3))}>+</button>
            </div>
}
export default Counter;