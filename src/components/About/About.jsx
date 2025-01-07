import React from 'react'
import style from './About.module.css' 

export default function About() {
  return (
    <>
      <section className='bg-teal-500 h-screen mt-12 py-20   flex justify-center items-center'>
        <div className="container">
        <p className='uppercase text-4xl font-bold text-white mb-14 text-center'>about component</p>
        <div >
        <div className='w-20 h-1 bg-white absolute left-1/4 -translate-x-0  -translate-y-2 sm:left-2/4 sm:translate-x-5 '></div>
        <i class="fa-solid fa-star text-white absolute left-2/4  -translate-x-5  -translate-y-4 sm:left-2/4 sm:-translate-x-3"></i>
        <div className='w-20 h-1 bg-white absolute left-1/4 translate-x-32  -translate-y-2 sm:left-2/4 sm:-translate-x-28'></div>
        </div >
        <div className='grid md:grid-cols-2 w-[75%] mx-auto p-6 items-center'>
        <p className='text-white p-8 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='text-white p-8'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

        </div>     
      </section>
    </>
  )
}
