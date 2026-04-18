import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

export default function TopNav() {
    return (
        <nav className='sticky top-0 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 uppercase'>
            {/* Brand */}
            <div className='text-xl font-bold'>
                <Link href="/">Next Match</Link>
            </div>

            {/* Center Links */}
            <div className='flex space-x-6'>
                <NavLink label="Members" href="/members" />
                <NavLink label="Messages" href="/messages" />
                <NavLink label="Lists" href="/lists" />
            </div>

            {/* Right Side */}
            <div className='flex space-x-4'>
                <Link href="/login" className='hover:text-gray-300 border-2  border-white p-2'>Login</Link>
                <Link href="/register" className='hover:text-gray-300  border-2  border-white p-2'>Register</Link>
            </div>
        </nav>
    )
}
