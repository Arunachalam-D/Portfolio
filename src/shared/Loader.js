import { useEffect, useState } from 'react'
import Img from '../assets/TabImage.jpeg'

export default function Loader(){
    const [name, setName] = useState('w-[20vh] h-[20vh] m-auto loading')
    useEffect(()=>{
       
        setTimeout(()=>{
            setName('animate__animated animate__fadeOutUp w-[20vh] h-[20vh] m-auto');
            setTimeout(()=>{
                    
            },3000)
           
        },2000)
    },[])
    
    return(
        <>
        <div className='bg-white w-[100vw] h-[100vh] flex flex-col'>
        <img src={Img} className={name}/>
        </div>
        </>
    )
}