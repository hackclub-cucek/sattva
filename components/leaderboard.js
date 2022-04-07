import React from 'react'

export default function Leaderboard() {
    const data = [
        {
            name: 'Information Technology',
            points: '100'
        },
        {
            name: 'Computer Science Engineering',
            points: '200'
        },
        {
            name: 'Electrical & Electronics Engineering',
            points: '300'
        },
        {
            name: 'Electronics & Communication Engineering',
            points: '400'
        },
        {
            name: 'Civil Engineering',
            points: '500'
        },
        {
            name: 'Mechanical Engineering',
            points: '600'
        },
        {
            name: 'Mechanical Engineering',
            points: '500'
        },
    ]
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
                {[...data].sort((a, b) => a.points > b.points ? -1 : 1).map((item, index) => (
                    <div key={index} className="flex justify-between px-5 py-4 rounded-lg border-2 border-white border-opacity-50 ">
                        <div className='flex justify-start space-x-10'>
                            <p className='text-left'>{index + 1}</p>
                            <p className='text-left'>{item.name}</p>
                        </div>
                        <p className='text-right'>{item.points}</p>
                    </div>
                ))}
            </div>
            {/* <table className='w-full lg:max-w-3xl space-y-3 lg:space-y-2 font-roboto font-semibold text-xl lg:text-2xl '>
                <thead className='bg-white bg-opacity-10'>
                    <tr className=''>
                        <th className='lg:pl-5 pl-4 py-[18px] text-left '>No.</th>
                        <th className='py-[18px] text-left'>Department</th>
                        <th className='lg:pr-5 pr-4 py-[18px] text-right'>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort((a, b) => a.points > b.points ? -1 : 1).map((item, index) => (
                        <tr key={index} className="bg-white bg-opacity-50 ">
                            <th className='lg:pl-5 pl-4 py-[18px] text-left'>{index + 1}</th>
                            <th className='py-[18px] text-left'>{item.name}</th>
                            <th className='lg:pr-5 pr-4 py-[18px] text-right'>{item.points}</th>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}
