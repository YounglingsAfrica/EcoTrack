import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
    },
    colors: ['#2ECC40', '#8BBC3A'],
    chart: {
        fontFamily: 'Outfit, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
        },

        toolbar: {
        show: false,
        },
    },
    responsive: [
        {
        breakpoint: 1024,
        options: {
            chart: {
            height: 300,
            },
        },
        },
        {
        breakpoint: 1366,
        options: {
            chart: {
            height: 350,
            },
        },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        show: true,
        position: "back",
        borderColor: "#143601",
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 2,
        colors: '#fff',
        strokeColors: ['#2ECC40', '#8BBC3A'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
        size: undefined,
        sizeOffset: 5,
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: '0px',
            },
        },
        labels: {
            show: true,
        },
        min: 0,
        max: 100,
    },
    };
    
    const ChartOne = () => {
    const [state, setState] = useState({
        series: [
        {
            name: 'Product One',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },

        {
            name: 'Product Two',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        },
        ],
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    useEffect(() => {
        handleReset();
    }, []);

    return (
        <div className="col-span-12 rounded-md border-2 border-white/20 bg-darkGreen/50 px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap mt-4 text-white">
            <div className="flex flex-row w-full gap-3">
            <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-5 w-5 items-center justify-center rounded-full border-2 p-1 border-primaryGreen">
                    <span className="block h-2 w-4 rounded-full bg-primaryGreen"></span>
                </span>
                <div className="w-full">
                <p className="font-semibold">Total Revenue</p>
                <p className="text-sm font-medium">12.04.2024 - 12.05.2024</p>
                </div>
            </div>
            <div className="flex min-w-47.5">
                <span className="mt-1 mr-2 flex h-5 w-5 items-center justify-center rounded-full border-2 p-1 border-recycleGreen">
                    <span className="block h-2 w-4 rounded-full bg-recycleGreen"></span>
                </span>
                <div className="w-full">
                <p className="font-semibold text-secondary">Total Sales</p>
                <p className="text-sm font-medium">12.04.2024 - 12.05.2024</p>
                </div>
            </div>
            </div>
            <div className="flex w-40 justify-end">
            <div className="inline-flex items-center rounded-md p-1.5 bg-black/20 gap-2">
                <button className="rounded bg-black py-1 px-3 text-xs font-medium text-white shadow-card hover:bg-primaryGreen hover:text-black hover:shadow-card">
                Day
                </button>
                <button className="rounded py-1 px-3 text-xs font-medium text-white hover:bg-primaryGreen hover:text-black hover:shadow-card">
                Week
                </button>
                <button className="rounded py-1 px-3 text-xs font-medium text-white hover:bg-primaryGreen hover:text-black hover:shadow-card">
                Month
                </button>
            </div>
            </div>
        </div>

        <div>
            <div id="chartOne" className="-ml-5">
                <ReactApexChart
                    options={options}
                    series={state.series}
                    type="area"
                    height={350}
                />
            </div>
        </div>
        </div>
    );
};

export default ChartOne;
