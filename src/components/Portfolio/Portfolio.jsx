import React from 'react'
import style from './Portfolio.module.css' 
import logo1 from '../../assets/poert1.png'
import logo2 from '../../assets/port2.png'
import logo3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
      <section >
        <div className="my-12 py-20">
        <p className='uppercase text-4xl font-bold text-gray-800 mb-14 text-center'>portfolio component</p>
        <div className='relative'>
        <div className='w-20 h-1 bg-gray-800 absolute left-1/4 -translate-x-0  -translate-y-8 sm:left-2/4 sm:translate-x-5 '></div>
        <i class="fa-solid fa-star text-gray-800 absolute left-2/4  -translate-y-10 sm:left-2/4 sm:-translate-x-3"></i>
        <div className='w-20 h-1 bg-gray-800 absolute left-1/4 translate-x-32  -translate-y-8 sm:left-2/4 sm:-translate-x-28'></div>
        </div>
        <div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 pt-10'>
          <div className='  relative'>
            <img src={logo1} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 opacity-0 rounded-lg hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          <div className=' relative'>
            <img src={logo2} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 opacity-0 rounded-lg hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          <div className=' relative'>
            <img src={logo3} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 opacity-0 rounded-lg hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          <div className=' relative'>
            <img src={logo1} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 opacity-0 rounded-lg hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          <div className=' relative'>
            <img src={logo2} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 opacity-0 rounded-lg hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          <div className=' relative'>
            <img src={logo3} alt="" className='rounded-lg' />
            <div className='bg-teal-600 absolute bottom-0 top-0 left-0 right-0 rounded-lg opacity-0 hover:opacity-85 flex justify-center items-center'>
            <i class="fa-solid fa-plus  text-white text-8xl"></i>
            </div>
          </div>
          </div>
          
        </div>

        </div>     
      </section>
    </>
  )
}
