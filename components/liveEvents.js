import React from 'react'

export default function LiveEvents() {
    return (
        <div className='flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-20 pt-32 lg:px-24 px-4'>
            <div className='flex flex-col space-y-2 pb-6 lg:pb-0'>
                <h2 className='font-roboto font-bold lg:text-4xl text-2xl'>Live Events</h2>
                <p className='flex font-roboto font-normal lg:text-xl text-base'>ONSTAGE EVENTS</p>
            </div>
            <div className='flex lg:flex-row flex-col w-full lg:max-w-3xl lg:space-x-4 space-y-2 lg:space-y-0'>
                <div className='w-full max-w-3xl lg:space-y-4 space-y-2'>
                    <div className='flex flex-col space-y-2 bg-grayshade lg:px-12 lg:py-12 px-8 py-8 rounded-lg'>
                        <h2 className='font-roboto font-semibold text-xl '>Inauguration Ceremony</h2>
                        <p className='font-roboto font-normal text-sm lg:text-lg'>Stage 1</p>
                    </div>
                    <div className='flex flex-col space-y-2 bg-grayshade lg:px-12 lg:py-12 px-8 py-8 rounded-lg'>
                        <h2 className='font-roboto font-semibold text-xl '>Coming Soon</h2>
                        <p className='font-roboto font-normal text-sm lg:text-lg'>Stage 2</p>
                    </div>
                </div>
                <div className='w-full max-w-3xl lg:space-y-4 space-y-2'>
                    <div className='flex flex-col space-y-2 bg-grayshade lg:px-12 lg:py-12 px-8 py-8 rounded-lg'>
                        <h2 className='font-roboto font-semibold text-xl '>Coming Soon</h2>
                        <p className='font-roboto font-normal text-sm lg:text-lg'>Stage 3</p>
                    </div>
                    <div className='flex flex-col space-y-2 bg-grayshade lg:px-12 lg:py-12 px-8 py-8 rounded-lg'>
                        <h2 className='font-roboto font-semibold text-xl '>Coming Soon</h2>
                        <p className='font-roboto font-normal text-sm lg:text-lg'>Stage 4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
