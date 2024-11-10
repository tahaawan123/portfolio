import React from 'react'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='flex border-b-4 border-red-400'>
      <div className='w-[600px] m-24'>
      <h1 className='text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500  '>Hi I am Muhammad Taha</h1>
      <p className='text-xl mt-9  font-serif'>I am a passionate web developer skilled in HTML CSS and JavaScript. Currently I am deepening my expertise in Next.js to stay on top of modern web development. I enjoy crafting seamless user-friendly experiences and love bringing ideas to life through code.</p>
      </div>
      <div className='m-11'>
      <Image src={"/img.jpg"} alt="Profile-Pic" width={300} height={200}
      className='rounded-full
      
      shadow-black
         shadow-[0px_4px_20px_0px_rgba(0,0,0,0.5)]
      '/>
      </div>
     
    </div>
  )
}

export default Hero;
