import resume from '../assets/Resume.pdf' 
export default function Resume(){
    return(
        <>
            <div className='w-[100%] flex justify-end pe-[2%]'>
                <button className='bg-gradient-to-r from-violet-600 to-pink-500  text-white rounded-[10px] px-[1%] py-[0.5%] px-[3%] md:px-[1%] justify-center  text-sm'><a href={resume} target='_blank'>View Resume</a></button>
            </div>
        </>
    )
}