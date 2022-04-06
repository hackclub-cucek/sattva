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
                <h2 className='font-roboto font-bold lg:text-6xl text-2xl'>Leaderboard</h2>
                <p className='lg:flex hidden font-roboto font-normal lg:text-2xl'>Total Points</p>
            </div>
            <table className='w-full lg:max-w-3xl space-y-3 lg:space-y-2 font-roboto font-semibold text-xl lg:text-2xl '>
                <thead className=''>
                    <tr>
                        <th className='lg:pl-5 pl-4 py-[18px] text-left'>No.</th>
                        <th className='py-[18px] text-left'>Department</th>
                        <th className='lg:pr-5 pr-4 py-[18px] text-right'>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort((a, b) => a.points > b.points ? -1 : 1).map((item, index) => (
                        <tr key={index}>
                            <th className='lg:pl-5 pl-4 py-[18px] text-left'>{index + 1}</th>
                            <th className='py-[18px] text-left'>{item.name}</th>
                            <th className='lg:pr-5 pr-4 py-[18px] text-right'>{item.points}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
