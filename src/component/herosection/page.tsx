import React from 'react';
import Image from 'next/image';
import profile from "../../../public/assets/profilepng.png"
import { motion } from "motion/react"
type Props = {};

export default function HeroSection({}: Props) {
  return (
    <main 
      className="relative w-full h-screen rounded-tr-xl rounded-bl-xl"
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-tr-xl rounded-bl-xl"
        style={{
          backgroundImage: `url('/assets/bgimage.jpg')`,
          opacity: 0.2, // Apply opacity only to the background
          zIndex: -1, // Ensure it's behind the content
        }}
      ></div>

      {/* Content layer */}
      <section className='flex justify-center items-center'>
      <section className="relative z-10 text-secdondaryColor flex flex-col px-10 py-10 gap-10  h-full w-full ">
       
       <div className='text-5xl font-bold'>
Hello, I am 
        </div>
        <div>
        <h1 className="capitalize text-8xl text-ternaryColor font-extrabold">himal fullel</h1>
        </div>
        <div>
          <h1 className='text-5xl font-bold'>A web Developer, </h1>
          <h2 className='text-4xl font-semibold'>from Nepal</h2>
        </div>
      
       
      </section>

      <section className='py-5'>
        
<Image src={profile} alt='profile logo' height={800}/>
      </section>
        </section>
    </main>
  );
}
