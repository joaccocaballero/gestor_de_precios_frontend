'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

export default function NavBar({titulo, homeRoute, showHomeButton}){
    const router = useRouter();
    const handleClick = () => {
        router.back();
    };
    return(
        <div className="navbar bg-base-100 gap-1 mt-3">
                <button className='btn btn-ghost btn-xs' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
            {
                (showHomeButton) ? <Link href={homeRoute}>
                    <button className='btn btn-ghost btn-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </button>
                </Link>
                : null
            }
            <div className='ml-2'>
                <a className="normal-case text-black text-3xl">{titulo}</a>
            </div>
        </div>
    )
}