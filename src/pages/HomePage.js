import { useState } from 'react'
import profile from '../assets/DP.png'
import Layout from '../layout/Layout'
import Footer from '../shared/Footer'
import 'animate.css'


export default function Home(){
   
    return(

        <>
    
        <Layout>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 text-center mt-[2.5%] w-[80%] md:mt-[10%] md:mb-[10%] lg:mt-[2.5%] lg:mb-[0%] m-auto">
         
            <div className="antialiased leading-relaxed  text-left text-2xl text-stone-600 m-auto font-serif font-light w-[70%] md:mb-[5%] lg:mb-[0%] xl:mb-[5%]">Hi,I'm <span className='flex'><div className ='text-red-400  animate__animated animate__fadeInDown'>Arunachalam</div></span> a Frontend Developer.I like to craft solid and scalable frontend products with great user experience and appealing user interface</div>
         
            <div className="bg-gradient-to-r from-gray-800  to-red-400 rounded-[100%] p-[5%] m-auto"><img className='rounded-[100%] h-[20vh] w-[40vw] md:w-[20vh] lg:h-[40vh]  lg:w-[20vw]' src={profile}/></div>
        </div>
        
        </Layout>
        <Footer/>
        
        </>
    )
}

