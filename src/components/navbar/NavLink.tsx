'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    label: string;
    href: string;
}

export default function NavLink({ label, href }: Props) {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link href={href} className={`hover:text-gray-300 ${isActive ? 'text-yellow-300' : ''}`}>
            {label}
        </Link>
    )
}
