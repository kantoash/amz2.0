import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Bars4Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

type Props = {}

function Header({}: Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
  return (
    <header className='sticky top-0 z-50'>

        {/* upper nav */}
        <div className='flex items-center bg-amazon_blue px-5 flex-grow py-2 justify-between space-x-8'>
            {/* image */}
            <div className='mt-2 items-center flex-grow sm:flex-grow-0'>
                <Image onClick={() => router.push('/')} src="https://links.papareact.com/f90" width={150} height={40} className='cursor-pointer' alt={''} />
            </div>

            {/* input */}
            <div className='hidden md:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500'>
                <input type="text" className='h-full p-2 px-4 flex-grow rounded-l-md flex-shrink outline-none '/>
                <MagnifyingGlassIcon className='h-12 p-3 '/>
            </div>
            {/* icons */}
            <div className='text-white flex items-center justify-between space-x-4 text-xs  md:text-sm whitespace-nowrap'>
                <div onClick={!session ? (()=>signIn()) : (()=>signOut())} className='cursor-pointer'>
                    <p>{session ? `helllo, ${session.user?.name} ` : " Sign In "}</p>
                    <p className='font-bold hover:underline text-lg'>Account & Lists</p>
                </div>
                <div className='cursor-pointer'>
                    <p>Returns</p>
                    <p className='font-bold hover:underline text-lg'>& Orders</p>
                </div>
                <div onClick={() => router.push('/CheckOut')} className='relative link flex items-center cursor-pointer'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'>
                        {items.length}
                    </span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='IconText hidden md:inline mt-2 hover:underline'>Basket</p>
                </div>
            </div>
        </div>


        {/* bottom nav  */}
        <div className='flex items-center space-x-3 justify-start bg-amazon_blue-light text-gray-200 py-1 px-3'>
            <p className='flex items-center '><Bars4Icon className='h-6 pr-1'/> <span> All </span> </p>
            <p>Prime Video</p>
            <p>Amazon Business</p>
            <p>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header