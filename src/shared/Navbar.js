import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
export default function App() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 text-white  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <NavLink to='/' className={({isActive}) => (isActive ? "flex  items-center text-red-400":"flex  items-center hover:text-gray-400")}>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/experience' className={({isActive}) => (isActive ? "flex  items-center text-red-400":"flex  items-center hover:text-gray-400")}>
          Experience
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/works' className={({isActive}) => (isActive ? "flex  items-center text-red-400":"flex  items-center hover:text-gray-400")}>
          Works
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/contact' className={({isActive}) => (isActive ? "flex  items-center text-red-400":"flex  items-center hover:text-gray-400")}>
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto border-none text-black py-2 px-4 lg:px-8 lg:py-4  bg-gray-800 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
       
        <div className="hidden lg:block lg:pl-[8%]  m-auto">
          {navList}
          
        </div>
        <NavLink  to='/HireMe' className="text-white bg-red-400 px-[1%] hidden lg:block py-[0.5%] text-sm rounded-[5px]"><button >Hire me</button></NavLink>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 mb-[3%]  text-inherit text-[white] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          
        </div>
        <div className="w-[100%] flex"> 
        <NavLink to='/HireMe' className="text-white m-auto bg-red-400 px-[1.5%]  py-[1%] text-sm rounded-[5px]"><button >Hire me</button></NavLink>
        </div>
      </Collapse>
    </Navbar>
  );
}