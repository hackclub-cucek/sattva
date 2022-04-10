import React from 'react'
import { Disclosure } from '@headlessui/react'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export default function ResultsList({ data }) {
    return (
        <div className='flex flex-wrap gap-5 bg-black text-white lg:py-36 py-20 lg:px-24 px-4 '>
            {data.map((item, index) => (
                <div key={index} className='flex flex-col w-full lg:max-w-sm'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between items-center text-left lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
                                    <p className='text-xl lg:text-2xl font-semibold'>{item.events}</p>
                                    <ArrowRightSLineIcon
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="lg:px-5 lg:py-6 px-4 py-[18px] my-2 rounded-lg border border-light border-opacity-50">
                                    <div className='flex flex-col space-y-6'>
                                        <div className='flex flex-col space-y-2'>
                                            <h1 className='text-lg lg:text-xl font-semibold'>First Prize</h1>
                                            <div className='flex flex-col space-y-2'>
                                                {
                                                    item.first.split(',').map((item, index) => (
                                                        <div key={index} className='flex justify-between'>
                                                            {
                                                                item.split('-').map((id, index) => (
                                                                    <p key={index} className='text-base lg:text-lg font-normal'>
                                                                        {id}
                                                                    </p>
                                                                ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h1 className='text-lg lg:text-xl font-semibold'>Second Prize</h1>
                                            <div className='flex flex-col space-y-2'>
                                                {
                                                    item.second.split(',').map((item, index) => (
                                                        <div key={index} className='flex justify-between'>
                                                            {
                                                                item.split('-').map((id, index) => (
                                                                    <p key={index} className='text-base lg:text-lg font-normal'>
                                                                        {id}
                                                                    </p>
                                                                ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h1 className='text-lg lg:text-xl font-semibold'>Third Prize</h1>
                                            <div className='flex flex-col space-y-2'>
                                                {
                                                    item.third.split(',').map((item, index) => (
                                                        <div key={index} className='flex justify-between'>
                                                            {
                                                                item.split('-').map((id, index) => (
                                                                    <p key={index} className='text-base lg:text-lg font-normal'>
                                                                        {id}
                                                                    </p>
                                                                ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    )
}
