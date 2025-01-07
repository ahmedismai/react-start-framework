import React from 'react'
import style from './Notfound.module.css' 

export default function Notfound() {
  return (
    <>
      <div className='h-[50%] py-28 mt-12 text-center flex justify-center items-center  '> 
      <div>
      <p className='text-blue-400 text-5xl pb-6 font-bold '>404 - Page Not Found</p>
      <p className='text-gray-500 text-3xl w-[60%] mx-auto'>Whoops! That page doesn’t exist. But do not fret, check out our other resources to get started.</p>
      </div>
      </div>
    </>
  )
}
