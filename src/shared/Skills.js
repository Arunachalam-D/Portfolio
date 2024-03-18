import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect,useState } from "react";
import { Fade } from "react-awesome-reveal";
import Resume from './Resume';

export default function Skills(){
    const [HTML, setHTML] = useState(0);
    const [Css, setCss] = useState(0);
    const [Js, setJs] = useState(0);
    const [ReactJs, setReact] = useState(0);
    const [Sql, setSql] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(HTML < 90){
                setHTML(HTML+5);
            }
            if(Css < 80){
                setCss(Css+5);
            }
            if(Js < 75){
                setJs(Js+5);
            }
            if(ReactJs < 80){
                setReact(ReactJs+5);
            }
            if(Css < 80){
                setCss(Css+5);
            }
            if(Js < 75){
                setJs(Js+5);
            }
            if(Sql < 60){
                setSql(Js+5);
            }
        },50)
    })
    return(
        <>
        <div className="m-auto w-[90%] mt-[5%] bg-gray-800 rounded-[15px] py-[2%]">
             <div>
             <Resume/>
             </div>
                <h1 className="text-center text-white text-4xl mb-[5%]">My Skills</h1>
              
                
               <Fade duration={1000}> 
                    <div className="flex gap-16 md:gap-32 justify-center m-auto my-[3%] px-[2%] md:px-[0%]">
                    <div className="w-[10vw]">
                    <CircularProgressbar styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={HTML}  text={`90%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">HTML</h1>
                    </div>
                    <div className="w-[10vw]">
                    <CircularProgressbar styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={Css}  text={`80%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">CSS</h1>
                    </div>
                    <div className="w-[10vw] ">
                    <CircularProgressbar styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={Js}  text={`75%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">Javascript</h1>
                    </div>
                </div>
                </Fade>

                <Fade direction='down' duration={1000}>
                <div className="flex gap-16 md:gap-32  justify-center m-auto  px-[2%] md:px-[0%]">
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})}  minValue={0} maxValue={100} value={ReactJs}  text={`80%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">React</h1>
                    </div>
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={Sql}  text={`60%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">Typescript</h1>
                    </div>
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={HTML}  text={`90%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">Bootstrap</h1>
                    </div>
                </div>
                </Fade>
                <Fade direction='down' duration={1000}>
                <div className="flex gap-16 md:gap-32 justify-center m-auto my-[3%]  px-[2%] md:px-[0%]">
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={HTML}  text={`90%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">Tailwind</h1>
                    </div>
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={Sql}  text={`60%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">SQL</h1>
                    </div>
                    <div className="w-[10vw]">
                    <CircularProgressbar  styles={buildStyles({ pathColor: "#f95971",trailColor: 'white',textColor: 'white'})} minValue={0} maxValue={100} value={Sql}  text={`60%`} />
                    <h1 className="text-white mt-[8%] text-center m-auto text-sm md:text-lg">Java</h1>
                    </div>
                    
                </div>
                </Fade>
            </div>
        </>
    )
}