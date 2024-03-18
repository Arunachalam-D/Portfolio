import Layout from "../layout/Layout";
import SocialLinks from "../shared/SocialLinks";
import React,{useState, useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Contact(){

    const [message,setMessage] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 
        let name = document.getElementById("inputField1").value
        let email = document.getElementById("inputField2").value
        let subject = document.getElementById("inputField3").value
        let review = document.getElementById("inputField4").value
        
       if(name == "" || email == "" || subject == "" || review == "" ){
        setMessage("Enter all details")
        setTimeout(()=>{
          setMessage("")
        },2000)
       }
       else{
        emailjs.sendForm('service_rmq6w7l', 'template_3epj9q6', form.current, '9Fmz8wlvtiZUeE9bQ')
          .then((result) => {
           setMessage("Message sent successfully");
           setTimeout(()=>{
            setMessage("");
           },2000)
           document.getElementById("inputField1").value = ""
           document.getElementById("inputField2").value = ""
           document.getElementById("inputField3").value = ""
           document.getElementById("inputField4").value = ""
          }, (error) => {
            console.log(error)
            setMessage("Oops!!! couldn't send the message");
          });}
      };

    return(
        <>
            <Layout>
            
            <div className="grid grid:cols-2 md:grid-cols-2 text-center text-white m-auto mt-[10vh] w-[80%] ">
              
                <div className="bg-red-400 grid intro animate__animated animate__fadeInDown content-center  text-gray-700 font-semibold py-[5%]">
                   
                    <h1 className="text-4xl mt-[5%]">Wanna know more.</h1>
                    <h1 className="text-xl mt-[2%]">Let's get in touch.</h1>
                    <div className="mt-[10%]">
                    <SocialLinks />
                    </div>
                
                   
                </div>
               
                <div className="bg-gray-800 p-[1%] text-black animate__animated animate__fadeInUp">
                    <form ref={form} onSubmit={sendEmail}>
                     
                        
                            <input name="user_name" type='text' id='inputField1' placeholder="name" className="inputs w-[80%] rounded-[5px] p-[1%] mb-[2%] mt-[5%] bg-[#f7f0e3] font-light"/><br></br>
                            <input name="user_email" type='email' id='inputField2' placeholder="email" className="inputs w-[80%] rounded-[5px] p-[1%] mb-[2%] bg-[#f7f0e3] font-light"/><br></br>
                            <input name="user_subject" type='text' id='inputField3' placeholder="subject" className="inputs w-[80%] rounded-[5px] p-[1%] mb-[2%] bg-[#f7f0e3] font-light"/><br></br>
                            <textarea name="message" rows={3} id='inputField4' placeholder="type message" className="resize-none w-[80%] rounded-[5px] p-[1%] bg-[#f7f0e3] font-light"/><br></br>
                            <button type="submit" className="bg-red-400 py-[1%] px-[2%] rounded-[5px] text-white my-[2%]">Send</button>
                            <p className="text-white italic mt-[1%]">{message}</p>
                    </form>
                </div>

            </div>

            </Layout>
        </>
    )
}