import React from 'react'
import style from './Contact.module.css' 

export default function Contact() {
  return (
    <>
      <section className=' mt-12 py-20  flex justify-center items-center'>
        <div className="container">
        <p className='uppercase text-4xl font-bold text-gray-800 mb-14 text-center'>about component</p>
        <div >
        <div className='w-20 h-1 bg-gray-800 absolute left-1/4 -translate-x-0  -translate-y-2 sm:left-2/4 sm:translate-x-5 '></div>
        <i class="fa-solid fa-star text-gray-800  absolute left-2/4  -translate-x-5  -translate-y-4 sm:left-2/4 sm:-translate-x-3"></i>
        <div className='w-20 h-1 bg-gray-800 absolute left-1/4 translate-x-32  -translate-y-2 sm:left-2/4 sm:-translate-x-28'></div>
        </div >
<form class="max-w-2xl mx-auto pt-14">
  <div class="relative z-0 w-full mb-10 group">
      <input type="text" name="userName"  class="block  rounded-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer" placeholder=" " required />
      <label for="userName" class="peer-focus:font-medium px-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>
  <div class="relative z-0 w-full mb-10 group">
      <input type="number" name="userAge"  class="block rounded-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer" placeholder=" " required />
      <label for="userAge" class="peer-focus:font-medium px-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div class="relative z-0 w-full mb-10 group">
      <input type="email" name="userEmail"  class="block rounded-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer" placeholder=" " required />
      <label for="userEmail" class="peer-focus:font-medium px-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
  </div>
  <div class="relative z-0 w-full mb-10 group">
      <input type="password" name="userPassword"  class="block rounded-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer" placeholder=" " required />
      <label for="userPassword" class="peer-focus:font-medium px-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
  </div>
  
  <button type="submit" class="text-white bg-teal-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">send Message</button>
</form>
</div>
</section>
    </>
  )
}
