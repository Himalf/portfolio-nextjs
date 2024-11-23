import React from 'react'
import Logo from "../../../public/assets/logo.png"
import Image from 'next/image'
type Props = {}

export default function NavbarSection({}: Props) {
  return (
    <main className='flex justify-around items-center mt-5'>
<section className={``}>
 <div className='hover:hidden flex items-center'> <Image src={Logo} height={60} width={60}  alt='logo' className='rounded-full cursor-pointer'/></div>
</section>
<section>
    <ul className="flex gap-9 justify-center cursor-pointer ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
</section>
    </main>
  )
}