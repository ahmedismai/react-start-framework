import React from 'react'
import style from './Home.module.css' 
import avatar from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <>
      <section className='bg-teal-500 h-screen text-center  flex justify-center items-center'>
        <div className="container">
        <div className='text-center flex items-center justify-center py-10'>
        <img src={avatar} alt="avatar image" className='w-52' />
        </div>
        <p className='uppercase text-4xl font-bold text-white mb-14'>start Framework</p>
        <div className='relative'>
        <div className='w-20 h-1 bg-white absolute left-1/4 -translate-x-0  -translate-y-8 sm:left-2/4 sm:translate-x-5 '></div>
        <i class="fa-solid fa-star text-white absolute left-2/4  -translate-y-10 sm:left-2/4 sm:-translate-x-3"></i>
        <div className='w-20 h-1 bg-white absolute left-1/4 translate-x-32  -translate-y-8 sm:left-2/4 sm:-translate-x-28'></div>
        </div>
        <span className='text-white pt-8'>Graphic Artist - Web Designer - Illustrator</span>
        </div>     
      </section>
    </>
  )
}
