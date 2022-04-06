import React from 'react'
import { Disclosure } from '@headlessui/react'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export default function OffStageEvents() {
    return (
        <div className='flex flex-col lg:flex-row justify-between bg-black text-white lg:pt-36 pt-20 lg:px-24 px-4'>
            <div className='flex flex-col lg:space-y-2 pb-6 lg:pb-0'>
                <h2 className='lg:flex hidden font-roboto font-bold lg:text-6xl'>Event Schedule</h2>
                <p className='font-roboto lg:font-normal font-bold lg:text-2xl text-2xl'>Off Stage Events</p>
            </div>
            <div className="flex flex-col w-full lg:max-w-3xl space-y-3 lg:space-y-2 font-roboto font-semibold text-xl lg:text-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between text-left lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-xl lg:text-3xl font-semibold'>Wednesday</p>
                                    <p className='text-base lg:text-xl font-normal'>6 April 22</p>
                                </div>
                                <ArrowRightSLineIcon
                                    className={`${open ? 'transform rotate-90' : ''
                                        } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-5 lg:py-6 px-4 py-[18px] my-2 rounded-lg border border-light border-opacity-50">
                                <div className='flex flex-col space-y-9'>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Essay Writing English</h3>
                                        <p className='text-sm lg:text-base font-normal'>10:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Essay Writing Malayalam</h3>
                                        <p className='text-sm lg:text-base font-normal'>11:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Essay Writing Hindi</h3>
                                        <p className='text-sm lg:text-base font-normal'>11:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Poem Writing English</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Poem Writing Malayalam</h3>
                                        <p className='text-sm lg:text-base font-normal'>03:00 PM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Poem Writing Hindi</h3>
                                        <p className='text-sm lg:text-base font-normal'>03:00 PM</p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between text-left lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-xl lg:text-3xl font-semibold'>Thursday</p>
                                    <p className='text-base lg:text-xl font-normal'>7 April 22</p>
                                </div>
                                <ArrowRightSLineIcon
                                    className={`${open ? 'transform rotate-90' : ''
                                        } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-5 lg:py-6 px-4 py-[18px] my-2 rounded-lg border border-light border-opacity-50">
                                <div className='flex flex-col space-y-9'>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Short Story Writing English</h3>
                                        <p className='text-sm lg:text-base font-normal'>10:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Short Story Writing Malayalam</h3>
                                        <p className='text-sm lg:text-base font-normal'>11:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Short Story Writing Hindi</h3>
                                        <p className='text-sm lg:text-base font-normal'>11:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Pencil Drawing</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between text-left lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-xl lg:text-3xl font-semibold'>Friday</p>
                                    <p className='text-base lg:text-xl font-normal'>8 April 22</p>
                                </div>
                                <ArrowRightSLineIcon
                                    className={`${open ? 'transform rotate-90' : ''
                                        } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-5 lg:py-6 px-4 py-[18px] my-2 rounded-lg border border-light border-opacity-50">
                                <div className='flex flex-col space-y-9'>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Water Coloring</h3>
                                        <p className='text-sm lg:text-base font-normal'>10:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Quiz</h3>
                                        <p className='text-sm lg:text-base font-normal'>10:30 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Cartooning</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Oil Coloring</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Film Review English</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between text-left lg:px-5 px-4 py-[18px] bg-white bg-opacity-10 rounded-lg">
                                <div className='flex flex-col space-y-2'>
                                    <span className='text-xl lg:text-3xl font-semibold'>Saturday</span>
                                    <span className='text-base lg:text-xl font-normal'>9 April 22</span>
                                </div>
                                <ArrowRightSLineIcon
                                    className={`${open ? 'transform rotate-90' : ''
                                        } w-5 h-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="lg:px-5 lg:py-6 px-4 py-[18px] my-2 rounded-lg border border-light border-opacity-50">
                                <div className='flex flex-col space-y-9'>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Film Review Malayalam</h3>
                                        <p className='text-sm lg:text-base font-normal'>09:30 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Mehndi</h3>
                                        <p className='text-sm lg:text-base font-normal'>09:30 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Poster Design</h3>
                                        <p className='text-sm lg:text-base font-normal'>10:00 AM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Collage</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h3 className='text-base lg:text-xl font-semibold'>Caricature</h3>
                                        <p className='text-sm lg:text-base font-normal'>02:00 PM</p>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
