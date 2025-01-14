import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import style from './Navbar.module.css';
import About from '../About/About';



// export default function Nav() {

//   const [count , setcount]=useState('hidden')
  
//   function changeClassName(){
//     if(count==='hidden'){
//         setcount('bolck')
//       }else{
//         setcount('hidden')
//       }
  
//   }
  
  
//     return (
//       <div>
//         <nav className="bg-slate-700 fixed top-0 left-0 right-0 border-gray-200 py-4 z-50">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-3xl font-bold  whitespace-nowrap text-white ">START FRAMEWORK</span>
//       </Link>
//        <button onClick={()=>changeClassName()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//           </svg>
//       </button> 
//       <div className={`w-full md:block md:w-auto ${count}`} id="navbar-default">
//         <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
//           <li>
//             <Link to="about" className="block py-2 px-3 text-white md:p-0 font-bold " aria-current="page">ABOUT</Link>
//           </li>
//           <li>
//             <Link to="portfolio" className="block py-2 px-3 text-white md:p-0 font-bold " aria-current="page">PORTFOLIO</Link>
//           </li>
//           <li>
//             <Link to="contact" className="block py-2 px-3 text-white md:p-0 font-bold" aria-current="page">CONTACT</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//       </div>
//     )
//   }
  
export default function Nav() {
  return (
    <Navbar fluid rounded className='bg-slate-700 fixed top-0 left-0 right-0 border-gray-200 py-4 z-50 '>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:px-[40px] lg:px-[70px] lg:mx-[20px] py-4">
      <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl font-bold  whitespace-nowrap text-white uppercase">Start Framework</span>
      </Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <div className="font-bold flex flex-col py-4  mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:px-[40px] md:mt-0 lg:px-[70px] lg:mx-[20px] ">
        <Navbar.Link as={NavLink} to="about" className="padding text-white  font-bold uppercase rounded-lg" activeClassName="active">
          About
        </Navbar.Link>
        <Navbar.Link as={NavLink}  to="portfolio" className="padding text-white  font-bold uppercase rounded-lg">
        portfolio
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="contact" className="padding text-white  font-bold uppercase rounded-lg">
          Contact
        </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}