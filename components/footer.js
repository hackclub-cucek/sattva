import React from 'react'
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon'

export default function Footer() {
    return (
        <div className='flex flex-col lg:items-start lg:text-left text-center items-center lg:space-y-2 space-y-6 bg-black text-white lg:pt-36 pt-20 lg:px-24 px-4 lg:pb-16 pb-10'>
            <h1 className='lg:w-96 font-roboto font-bold lg:text-6xl text-2xl'>Follow us on Instagram</h1>
            <a href='https://instagram.com/sattva_2022?utm_medium=copy_link' target='_blank' rel='noopener noreferrer' className='flex space-x-2 py-2 px-3 items-center bg-shade rounded-lg'>
                <InstagramFillIcon className='w-9 h-9 lg:w-10 lg:h-10 text-white' />
                <p className='font-roboto font-semibold text-xs lg:text-2xl text-light' >
                    @sattva_2022
                </p>
            </a>
        </div>
    )
}
