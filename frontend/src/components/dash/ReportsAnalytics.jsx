import { React, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//import PieComponent from './PieComponent';

/*const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];*/

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  };

const ReportsAnalytics = () => {
    return(
        <div className=' mt-10 px-10 h-[80vh] grid grid-rows-6 grid-flow-col gap-4'>
            <div className='row-span-6 bg-white rounded-md'>
                <h1 className='text-lg  font-bold flex justify-center items-center mt-5'>Reports List</h1>
            </div>
            <div className='col-span-5 h-max w-max rounded-md'>
            <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Yearly Overview
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="/"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                2020
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="/"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                2021
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="/"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                2022
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="/"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                2023
                                </a>
                            )}
                            </Menu.Item>
                            <form method="POST" action="/">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    2024
                                </button>
                                )}
                            </Menu.Item>
                            </form>
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
            </div>
            <div className='grid grid-rows-subgrid gap-4 row-span-5 col-span-5'>
                <div className='row-start-1 bg-white rounded-md flex justify-center items-center'> G1</div>
                <div className='row-start-1 bg-white rounded-md flex justify-center items-center'> G2</div>
                <div className='row-start-1 bg-white rounded-md flex justify-center items-center'> G3</div>
                <div className='row-start-2 bg-white rounded-md flex justify-center items-center'> G4</div>
                <div className='row-start-2 bg-white rounded-md flex justify-center items-center'> G5</div>
                <div className='row-start-2 bg-white rounded-md flex justify-center items-center'> G6</div>
                <div className='row-start-3 bg-white rounded-md flex justify-center items-center'> G7</div>
                <div className='row-start-3 bg-white rounded-md flex justify-center items-center'> G8</div>
                <div className='row-start-3 bg-white rounded-md flex justify-center items-center'> G9</div>
            </div>
        </div>
    );
};

export default ReportsAnalytics;