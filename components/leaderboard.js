import React from 'react'

export default function Leaderboard({data}) {
    return (
        <div className='flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-20 pt-32 lg:px-24 px-4'>
            <div className='flex flex-col lg:space-y-2 pb-6 lg:pb-0'>
                <h2 className='font-roboto font-bold lg:text-4xl text-2xl'>Leaderboard</h2>
                <p className='flex font-roboto font-normal lg:text-xl text-base'>Total Points</p>
            </div>
            <div className='w-full max-w-3xl space-y-[10px] font-roboto font-semibold lg:text-xl text-base'>
                <div className='flex justify-between bg-white bg-opacity-10 px-5 py-4 rounded-lg'>
                    <div className='flex justify-start space-x-6'>
                        <p className='text-left'>No.</p>
                        <p className='text-left'>Department</p>
                    </div>
                    <p className='text-right'>Points</p>
                </div>
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between px-5 py-4 rounded-lg border-2 border-white border-opacity-50 ">
                        <div className='flex justify-start space-x-10'>
                            <p className='text-left'>{index + 1}</p>
                            <p className='text-left'>{item[0]}</p>
                        </div>
                        <p className='text-right'>{item[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
