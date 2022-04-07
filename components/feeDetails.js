import React from 'react'

export default function FeeDetails() {
    return (
        <div className='flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-20 pt-32 lg:px-24 px-4'>
            <div className='flex flex-col space-y-2 pb-6 lg:pb-0'>
                <h2 className='font-roboto font-bold lg:text-4xl text-2xl'>Fee Details</h2>
                <p className='flex font-roboto font-normal lg:text-xl text-base'>All Events</p>
            </div>
            <div className='flex flex-col w-full lg:max-w-3xl space-y-3 lg:space-y-2 font-roboto font-semibold text-xl lg:text-2xl'>
                <div className='flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg'>
                    <p>Individual Item Fee</p>
                    <p>30/-</p>
                </div>
                <div className='flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg'>
                    <div className='flex flex-col space-y-1 lg:space-y-2'>
                        <p>Group Item</p>
                        <p className='font-normal lg:text-base text-base'>Per Participant</p>
                    </div>
                    <p>20/-</p>
                </div>
                <div className='flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg'>
                    <p>Spot Registeration</p>
                    <p>60/-</p>
                </div>
                <div className='flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg'>
                    <p>Substitution</p>
                    <p>40/-</p>
                </div>
                <div className='flex justify-between lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg'>
                    <p>Appeal</p>
                    <p>750/-</p>
                </div>
            </div>
        </div>
    )
}
