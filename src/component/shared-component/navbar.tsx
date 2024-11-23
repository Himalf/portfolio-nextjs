import React from 'react'
import Logo from "../../../public/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCopyright } from "react-icons/fa";
type Props = {}

export default function NavbarSection({}: Props) {
  const navItems=
  [
    {
    name:"Home",
    path:"/"
  },
  {
    name:"About",
    path:"/about"
  },
  {
    name:"projects",
    path:"/projects"
  },
  {
    name:"contact",
    path:"/contact"
  }
]
  return (
    <main className='flex justify-between items-center h-28 mx-20'>
<section>
 <h1 className='font-bold text-sm cursor-pointer hover:text-ternaryColor flex items-center gap-1'>
  <div><FaRegCopyright/></div> <div>Himal Fullel</div>
 </h1>
</section>
<section>
    <ul className="flex gap-9 justify-center">
        {navItems.map((val,i)=>{
          return(
            <li key={i} className='cursor-pointer hover:text-ternaryColor hover:border-b border-ternaryColor hover:scale-105'>
<Link href={val.path}>
{val.name}
</Link>
            </li>
          )
          })}
    </ul>
</section>
    </main>
  )
}