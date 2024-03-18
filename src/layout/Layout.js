import Navbar from '../shared/Navbar'

export default function Layout({children}){
    return(
        <>
        <div className='text-center font-semibold mt-[2%]'>
            <h1 className='Ar mb-[2px]'>A's Portfolio</h1>
        </div>
        <Navbar/>
        <div>{children}</div>
        </>
    )
}