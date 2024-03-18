import Layout from "../layout/Layout"
import { FaBook } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBlackTie } from "react-icons/fa6";

import { Fade } from "react-awesome-reveal";

export default function Timeline(){
    return(
        <>
        <Layout>
        <div className="container mx-auto w-full h-full">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: "50%"}}></div>
    
    
      <Fade direction="right">

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white"><FaBlackTie/></h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-sm sm:text-xl">Developer Trainee</h3>
        <p className="text-sm leading-snug tracking-wide mt-[1%] text-gray-900 text-opacity-100"> Novastrid Solutions-Madurai</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-gray-900 text-opacity-100"> Learnt : React JS, Typescript, Tailwind css</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-gray-900 text-opacity-100">2023, Jun - Present</p>
       
      </div>
    </div>

    </Fade>
    <Fade direction="left">
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg"><FaBusinessTime/></h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-sm sm:text-xl">Developer Intern</h3>
        <p className="text-sm font-medium leading-snug tracking-wide  mt-[1%] text-white text-opacity-100"> Novastrid Solutions-Madurai</p>
        <p className="text-sm font-medium leading-snug tracking-wide  mt-[1%] text-white text-opacity-100"> Learnt : HTML, CSS, JavaScript, Bootstrap</p>
        <p className="text-sm font-medium leading-snug tracking-wide  mt-[1%] text-white text-opacity-100"> 2023, Feb - May</p>
      </div>
    </div>


   
    </Fade>
      
    <Fade direction="right">

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold  text-lg text-white"><FaWindows/></h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl  w-5/12 px-6 py-4 ">
        <h3 className="mb-3 font-bold text-gray-800 text-sm sm:text-xl">Web development</h3>
        <p className="text-sm leading-snug tracking-wide mt-[1%] text-gray-900 text-opacity-100">Self Learnt HTML,CSS and built responsive websites.Web development refers to building, creating, and an maintaining websites.</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-gray-900 text-opacity-100"> 2022</p>
    
 </div>
    </div>

  
    </Fade>
    <Fade direction="left">

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg"><FaGraduationCap/></h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-sm sm:text-xl">Under Graduate</h3>
        <p className="text-sm leading-snug tracking-wide mt-[1%] text-white text-opacity-100"> Mepco schlenk engineering college</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-white text-opacity-100">  B.E-ECE</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-white text-opacity-100">2018 - 2022</p>
  </div>
    </div>


    </Fade>
    <Fade direction="right">
   
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white"><FaBookOpen/></h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-sm sm:text-xl">HSC</h3>
        <p className="text-sm leading-snug tracking-wide mt-[1%] text-gray-900 text-opacity-100">  Thiagarajar model higher secondary school</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-gray-900 text-opacity-100"> Percentage-93.4</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-gray-900 text-opacity-100">2017-2018</p>
 </div>
    </div>
 
    </Fade>
    <Fade direction="left">

    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg"><FaBook/></h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-sm sm:text-xl">SSLC</h3>
        <p className="text-sm leading-snug tracking-wide mt-[1%] text-white text-opacity-100"> Madura college higher secondary school</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-white text-opacity-100">  Percentage-96.4</p>
        <p className="text-sm leading-snug tracking-wide  mt-[1%] text-white text-opacity-100">2015 - 2016</p>
  </div>
    </div>


    </Fade>
   
   
  </div>
</div>
 </Layout>
        </>
    )
}