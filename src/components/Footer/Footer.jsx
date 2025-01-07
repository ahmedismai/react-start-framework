import React from 'react'
import style from './Footer.module.css' 

export default function Footer() {
  return (
    <>
  <section className="bg-slate-700  border-gray-200 p-10 pb-20 text-center">
  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-10 mx-auto'>
    <div className='text-white py-6'>
      <h3 className='font-bold text-3xl'>LOCATION</h3>
      <span className='block py-2'>2215 John Daniel Drive</span>
      <span className=''>Clark, MO 65243</span>
    </div>
    <div className='text-white text-center mx-auto py-6'>
      <h3 className='font-bold text-3xl pb-2 '>AROUND THE WEB</h3>
      <ul className="icon flex gap-2 justify-center align-items-center ">
      <li className='flex w-10 h-10 justify-center items-center  border rounded-full'><i class="fa-brands fa-facebook "></i></li>
      <li className='flex w-10 h-10 justify-center items-center border rounded-full'><i class="fa-brands fa-twitter  "></i></li>
      <li className='flex w-10 h-10 justify-center items-center  border rounded-full'><i class="fa-brands fa-linkedin "></i></li>
      <li className='flex w-10 h-10 justify-center items-center  border rounded-full'><i class="fa-solid fa-globe "></i></li>
      </ul>
    </div>
    <div className='text-white py-6 px-8'>
      <h3 className='font-bold text-3xl'>ABOUT FREELANCER</h3>
      <span className='block'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
    </div>
  </div>
</section>
<footer>
  <div className='items-center bg-slate-800 py-6 text-white text-center'>
  <p class="copyright">Copyright &copy; Your Website 2021</p>
    
  </div>
</footer>
    </>
  )
}
