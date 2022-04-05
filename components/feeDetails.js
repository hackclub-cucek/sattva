import React from 'react'

export default function FeeDetails() {
    return (
        <div className='flex flex-col bg-black justify-center items-start lg:items-center font-montserrat text-white pt-9 pb-12 lg:4 px-4'>
            <h1 className='text-3xl lg:text-6xl font-semibold pb-6'>Fee Details</h1>
            <table className='flex flex-col space-y-3'>
                <tr className='flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10'>
                    <td className='text-sm lg:text-lg font-semibold'>Individual Item Fee</td>
                    <td className='text-sm lg:text-lg font-normal pl-2'>: 30/-</td>
                </tr>
                <tr className='flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10'>
                    <td className='text-sm lg:text-lg font-semibold '>Group Item Fee</td>
                    <td className='text-sm lg:text-lg font-normal  pl-2'>: 20/- (Per Participant)</td>
                </tr>
                <tr className='flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10'>
                    <td className='text-sm lg:text-lg font-semibold '>Spot Registdation Fee</td>
                    <td className='text-sm lg:text-lg font-normal  pl-2'>: 60/-</td>
                </tr>
                <tr className='flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10'>
                    <td className='text-sm lg:text-lg font-semibold '>Substitution Fee</td>
                    <td className='text-sm lg:text-lg font-normal  pl-2'>: 40/-</td>
                </tr>
                <tr className='flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10'>
                    <td className='text-sm lg:text-lg font-semibold '>Appeal Fee</td>
                    <td className='text-sm lg:text-lg font-normal  pl-2'>: 750/-</td>
                </tr>
            </table>
        </div>
    )
}
