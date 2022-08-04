import React from 'react';
import { useDispatch } from 'react-redux';
import {openDish} from '../slice/OpenSingleDish';

const CustomerChoice = ({dishes,maxSize})=>{
    const dispatch = useDispatch();
    return(
        <div className='flex justify-between p-3 overflow-x-scroll'>
            {
            dishes.slice(0,maxSize).map((item) => (
                <div className='flex border rounded-md ml-2 px-1' key={item.id} onClick={()=>dispatch(openDish(item))}>
                    <img src={item.img_src} className='w-16 rounded-full' alt="" />
                    <span className='self-center'>
                        <strong>{item.name}</strong>
                        <p className='text-xs'>Rs: <span>{item.price}</span></p>
                    </span>
                </div>
            ))
            
            }
        </div>
    
    );
}

export{CustomerChoice}