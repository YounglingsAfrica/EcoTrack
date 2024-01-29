import { React, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {  
    AreaChart, 
    Area, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    PieChart, 
    Pie, 
    Cell, 
    ResponsiveContainer,
    BarChart,
    Bar,
    Brush,
    ReferenceLine 
} from 'recharts';

const data = [
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
  ];

  const barData = [
    { name: '1', uv: 300, pv: 456 },
    { name: '2', uv: -145, pv: 230 },
    { name: '3', uv: -100, pv: 345 },
    { name: '4', uv: -8, pv: 450 },
    { name: '5', uv: 100, pv: 321 },
    { name: '6', uv: 9, pv: 235 },
    { name: '7', uv: 53, pv: 267 },
    { name: '8', uv: 252, pv: -378 },
    { name: '9', uv: 79, pv: -210 },
    { name: '10', uv: 294, pv: -23 },
    { name: '12', uv: 43, pv: 45 },
    { name: '13', uv: -74, pv: 90 },
    { name: '14', uv: -71, pv: 130 },
    { name: '15', uv: -117, pv: 11 },
    { name: '16', uv: -186, pv: 107 },
    { name: '17', uv: -16, pv: 926 },
    { name: '18', uv: -125, pv: 653 },
    { name: '19', uv: 222, pv: 366 },
    { name: '20', uv: 372, pv: 486 },
    { name: '21', uv: 182, pv: 512 },
    { name: '22', uv: 164, pv: 302 },
    { name: '23', uv: 316, pv: 425 },
    { name: '24', uv: 131, pv: 467 },
    { name: '25', uv: 291, pv: -190 },
    { name: '26', uv: -47, pv: 194 },
    { name: '27', uv: -415, pv: 371 },
    { name: '28', uv: -182, pv: 376 },
    { name: '29', uv: -93, pv: 295 },
    { name: '30', uv: -99, pv: 322 },
    { name: '31', uv: -52, pv: 246 },
    { name: '32', uv: 154, pv: 33 },
    { name: '33', uv: 205, pv: 354 },
    { name: '34', uv: 70, pv: 258 },
    { name: '35', uv: -25, pv: 359 },
    { name: '36', uv: -59, pv: 192 },
    { name: '37', uv: -63, pv: 464 },
    { name: '38', uv: -91, pv: -2 },
    { name: '39', uv: -66, pv: 154 },
    { name: '40', uv: -50, pv: 186 },
  ];

  const pieData = [
    { name: 'Organic Waste', value: 400 },
    { name: 'Recycable Waste', value: 300 },
    { name: 'Commercial Waste', value: 300 },
    { name: 'Hazardous Waste', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  };

const ReportsAnalytics = () => {
    return(
        <div className=' mt-10 px-10 h-[full] grid grid-rows-6 grid-flow-col gap-4'>
            <div className='row-span-6 bg-white rounded-md h-[80vh] w-[25vh]'>
                <h1 className='text-lg  font-bold flex justify-center items-center mt-5'>Reports List</h1>
                <div className='flex flex-wrap justify-center items-center pt-3'>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 1
                    </button>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 2
                    </button>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 3
                    </button>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 4
                    </button>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 5
                    </button>
                    <button className='flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-primaryGreen to-black shadow-sm shadow-white hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out mt-10'>
                    Report 6
                    </button>

                </div>
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

            {/*Graphs*/}
            <div className='grid grid-rows-subgrid gap-4 row-span-5 col-span-5'>
                <div className='row-start-1 bg-white rounded-md flex justify-center items-center h-[30vh]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={400}
                        height={250}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 30,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
                </div>

                <div className='row-start-1 bg-white rounded-md flex justify-center items-center h-[30vh]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={300} height={300}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='row-start-2 bg-white rounded-md flex justify-center items-center'>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                        width={400}
                        height={250}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 30,
                            bottom: 10,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                </ResponsiveContainer>
                </div>

                <div className='row-start-2 bg-white rounded-md flex justify-center items-center'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={400}
                        height={250}
                        data={barData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Brush dataKey="name" height={30} stroke="#8884d8" />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default ReportsAnalytics;