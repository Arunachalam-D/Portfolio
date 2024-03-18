import Layout from "../layout/Layout";
import Image1 from '../assets/Screenshot (764).png'
import Image2 from '../assets/Screenshot (766).png'
import Image3 from '../assets/Learn.png'
import Image4 from '../assets/Todo-app.png'
import Image5 from '../assets/Rent-it.png'
import { Fade } from "react-awesome-reveal";

export default function Works(){
    return(
        <>
        <Layout>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 md:w-[90%] h-[fit-content] xs:w-[100%] lg:w-[80%] m-auto gap-5 p-[2%]">
        <Fade direction="left" >
            <div className="card3 pb-[5%] w-[80%] md:w-[100%]  rounded overflow-hidden shadow-lg  bg-white m-auto my-[10px] h-[65vh]">
                <img className="w-full" src={Image5} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2">Rent-It</div>
                         <p className="text-gray-700 text-base">
                         UI design for an e-commerce website where user can go through various categories of products and rent it.
                         </p>
                    </div>
                <div className="px-6 pb-1  flex justify-between">
                    <a href='https://rent-it-21dcd.web.app/' target="_blank" className="bg-blue-400 hover:bg-red-400 transition duration-300 px-[5%] py-[2%] rounded-[10px] text-white"><button >View</button></a>
                    
                </div>
            </div>
            </Fade>
            <Fade direction="left"  delay={500} >
            <div className="card1 pb-[5%] w-[80%] md:w-[100%]  rounded overflow-hidden shadow-lg  bg-white m-auto my-[10px]">
                <img className="w-full" src={Image1} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2">Time Monitor</div>
                         <p className="text-gray-700 text-base">
                         Captures In-time and Out-time of user based on login information provided by user and data stored on Table.
                         </p>
                    </div>
                <div className="px-6  pb-1 flex justify-between">
                <a href='https://github.com/Arunachalam-D/In-Out-Time-Monitor.git' className="bg-blue-400 hover:bg-red-400 transition duration-300 px-[5%] py-[2%] rounded-[10px] text-white" target="_blank"><button >View</button></a>
                </div>
                 </div>
             </Fade>
             <Fade direction="left" delay={1000}>
            <div className="card2 pb-[5%] w-[80%] md:w-[100%]  rounded overflow-hidden shadow-lg  bg-white m-auto my-[10px] h-[65vh]">
                <img className="w-full" src={Image2} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2">Frontend Roadmap</div>
                         <p className="text-gray-700 text-base">
                         A Frontend Roadmap guide for beginners with Text popups to learn provided with login section and timer.
                         </p>
                    </div>
                <div className="px-6 pb-1  flex justify-between">
                <a href='https://github.com/Arunachalam-D/Learning-Platform.git' target="_blank" className="bg-blue-400 hover:bg-red-400 transition duration-300 px-[5%] py-[2%] rounded-[10px] text-white"><button>View</button></a>
                    
                </div>
            </div>
            </Fade>
            
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 md:w-[90%] h-[fit-content] xs:w-[100%] lg:w-[80%] m-auto gap-5 p-[2%]">
           
        <Fade direction="left">
            <div className="card3 pb-[5%] w-[80%] md:w-[100%]  rounded overflow-hidden shadow-lg  bg-white m-auto my-[10px] h-[65vh]">
                <img className="w-full" src={Image3} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2">Learning Platform</div>
                         <p className="text-gray-700 text-base">
                         A learning platform with attractive user interface only allowing permitted users to access certain data content.
                         </p>
                    </div>
                <div className="px-6 pb-1  flex justify-between">
                    <a href='https://github.com/Arunachalam-D/Learning-Platform.git' target="_blank" className="bg-blue-400 hover:bg-red-400 transition duration-300 px-[5%] py-[2%] rounded-[10px] text-white"><button >View</button></a>
                    
                </div>
            </div>
            </Fade>
            <Fade direction="left"  delay={500}>
            <div className="card3 pb-[5%] w-[80%] md:w-[100%]  rounded overflow-hidden shadow-lg  bg-white m-auto my-[10px] h-[65vh]">
                <img className="w-full" src={Image4} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                     <div className="font-bold text-xl mb-2">Let's Doo</div>
                         <p className="text-gray-700 text-base">
                         A todo-list maker with smooth UI/UX and appealing color palette, that enables users to add,edit and delete tasks.
                         </p>
                    </div>
                <div className="px-6 pb-1  flex justify-between">
                    <a href='https://github.com/Arunachalam-D/Todo-app.git' target="_blank" className="bg-blue-400 hover:bg-red-400 transition duration-300 px-[5%] py-[2%] rounded-[10px] text-white"><button >View</button></a>
                    
                </div>
            </div>
            </Fade>
        </div>
        </Layout>
        </>
    )
}