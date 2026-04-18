import React from 'react'
import Link from 'next/link'

export default function TopNav() {
    return (
        <nav className='sticky top-0 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 uppercase'>
            {/* Brand */}
            <div className='text-xl font-bold'>
                <Link href="/">Next Match</Link>
            </div>

            {/* Center Links */}
            <div className='flex space-x-6'>
                <Link href="/members" className='hover:text-gray-300'>Members</Link>
                <Link href="/lists" className='hover:text-gray-300'>Lists</Link>
                <Link href="/messages" className='hover:text-gray-300'>Messages</Link>
            </div>

            {/* Right Side */}
            <div className='flex space-x-4'>
                <Link href="/login" className='hover:text-gray-300 border-2  border-white p-2'>Login</Link>
                <Link href="/register" className='hover:text-gray-300  border-2  border-white p-2'>Register</Link>
            </div>
        </nav>
    )
}
