import React from 'react'
import { Disclosure } from '@headlessui/react'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export default function OffStageEvents() {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-16 lg:justify-center bg-black font-montserrat text-white pt-9 pb-9 lg:pt-24 px-4'>
            <div className='flex flex-col space-y-2'>
                <h2 className='text-3xl lg:text-6xl font-semibold'>Events</h2>
                <p className='text-base lg:text-2xl font-semibold'>Off Stage Events</p>
            </div>
            <div className="lg:max-w-xl lg:w-full pt-6 lg:pt-0">
                <div className="flex flex-col space-y-4 max-w-md lg:max-w-xl mx-auto bg-transparent bg-opacity-10 rounded-lg">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-2'>
                                        <span className='text-sm lg:text-lg font-semibold'>WEDNESDAY</span>
                                        <span className='text-xs lg:text-sm font-normal'>6 April 22</span>
                                    </div>
                                    <ArrowRightSLineIcon
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 py-6 my-3 rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-9'>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs lg:text-sm font-semibold'>ESSAY WRITING ENGLISH</h3>
                                            <p className='text-xs font-normal'>10:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>ESSAY WRITING MALAYALAM</h3>
                                            <p className='text-xs font-normal'>11:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>ESSAY WRITING HINDI</h3>
                                            <p className='text-xs font-normal'>11:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>POEM WRITING ENGLISH</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>POEM WRITING MALAYALAM</h3>
                                            <p className='text-xs font-normal'>03:00 pm</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>POEM WRITING HINDI</h3>
                                            <p className='text-xs font-normal'>03:00 pm</p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-2'>
                                        <span className='text-sm lg:text-lg font-semibold'>THURSDAY</span>
                                        <span className='text-xs lg:text-sm font-normal'>7 April 22</span>
                                    </div>
                                    <ArrowRightSLineIcon
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 py-6 my-3 rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-9'>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs lg:text-sm font-semibold'>SHORT STORY WRITING ENGLISH</h3>
                                            <p className='text-xs font-normal'>10:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>SHORT STORY WRITING MALAYALAM</h3>
                                            <p className='text-xs font-normal'>11:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>SHORT STORY WRITING HINDI</h3>
                                            <p className='text-xs font-normal'>11:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>PENCIL DRAWING</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-2'>
                                        <span className='text-sm lg:text-lg font-semibold'>FRIDAY</span>
                                        <span className='text-xs lg:text-sm font-normal'>8 April 22</span>
                                    </div>
                                    <ArrowRightSLineIcon
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 py-6 my-3 rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-9'>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs lg:text-sm font-semibold'>WATER COLORING</h3>
                                            <p className='text-xs font-normal'>10:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>QUIZ</h3>
                                            <p className='text-xs font-normal'>10:30 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>CARTOONING</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>OIL COLORING</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>FILM REVIEW ENGLISH</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-left rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-2'>
                                        <span className='text-sm lg:text-lg font-semibold'>SATURDAY</span>
                                        <span className='text-xs lg:text-sm font-normal'>9 April 22</span>
                                    </div>
                                    <ArrowRightSLineIcon
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 py-6 my-3 rounded-lg bg-white bg-opacity-10">
                                    <div className='flex flex-col space-y-9'>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs lg:text-sm font-semibold'>FILM REVIEW MALAYALAM</h3>
                                            <p className='text-xs font-normal'>09:30 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>MEHNDI</h3>
                                            <p className='text-xs font-normal'>09:30 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>POSTER DESIGN</h3>
                                            <p className='text-xs font-normal'>10:00 am</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>COLLAGE</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='text-xs font-semibold'>CARICATURE</h3>
                                            <p className='text-xs font-normal'>02:00 pm</p>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>

        </div>
    )
}
