import React from 'react'
import Image from 'next/image'

function Nav() {
    return (

        <nav className='sticky top-0 z-10 bg-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-60 border-b border-slate-700'>
            <div className='max w-5xl mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    <span className='text-2xl text-white font-semibold'>JF</span>
                    <div className='flex space-x-4 text-white'>
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Joshua-Farin'>Github</a>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/joshua-farin-2a35aa19a/'>Linkedin</a>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav