import SocialLinks from "./SocialLinks";

export default function Footer(){
    return(
        <>
        <section className='w-[100%] text-center border-t-[1px] border-gray-400 md:mt-[3%] mt-[4%]'>
    <div className="max-w-screen-xl px-4 py-4  mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
        
       <SocialLinks />
        <p className="pt-[2px] text-base leading-6 text-center text-gray-400">
            © 2023 copyright. All rights reserved.
        </p>
    </div>
</section>
        </>
    );
}