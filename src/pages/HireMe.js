import Layout from "../layout/Layout";
import Img from '../assets/Working.png'
import Skills from "../shared/Skills";
import Footer from "../shared/Footer";
import { Fade } from "react-awesome-reveal";


export default function HireMe(){
   
    return(
        <>  
            <Layout>
                <div className="">
            <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-2 justify-center w-[90%] lg:w-[70%] m-auto mt-[5%]">
                <div className="w-[fit-content] m-auto ">
                   <Fade direction="down"><img src={Img} className="h-[30vh] m-auto"/></Fade> 
                </div>
               <div className="m-auto w-[100%]">
                    <Fade direction="up"><h1 className="text-lg md:text-2xl text-center about">" I'm an enthuciastic engineer equipped with knowledge in Html,Css,Javscript,React, Typescript, Tailwind,Bootstrap and with a thirst to contribute to society by designing and developing products. "</h1></Fade>
               </div>
            </div>
            <Skills/>
            </div>
            
            </Layout>
            <Footer/>
           
        </>
    )
} 