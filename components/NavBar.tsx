import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

function NavBar() {
  return (
    <div className='flex items-center gap-5 justify-between p-1 px-5 shadow-sm border-b-[1px]'>
        <Image src = '/Car-Logo.png' alt='logo' width={120} height={80}/>
        <div className='hidden md:flex gap-7'>
            <h1 className='hover:bg-red-950 px-3 cursor-pointer p-2 rounded-full hover:text-white text-lg'>Home</h1>
            <h1 className='hover:bg-red-950 px-3 cursor-pointer p-2 rounded-full hover:text-white text-lg'>History</h1>
            <h1 className='hover:bg-red-950 px-3 cursor-pointer p-2 rounded-full hover:text-white text-lg'>Contact Us</h1>
        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar