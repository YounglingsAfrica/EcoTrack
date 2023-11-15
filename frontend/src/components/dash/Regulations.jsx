import React from 'react'

const Regulations = () => {
  return (
    <div className='pt-[25px] px-[40px]'>
        <div className='flex items-center justify-between pb-[15px]'>
            <h1 className='text-white text-xl font-bold leading-[34px]'>Compliance Regulations</h1>
        </div>
        {/*Waste Act*/}
        <div className='grid grid-cols-2 gap-[25px] w-[90vw]'>
            <div className='basis-[50%] border-dashed border-2 border-black bg-white rounded-3xl flex flex-wrap justify-center items-center text-darkGreen p-1'>
                <h1 className='text-2xl underline font-bold p-1'>National Environmental Management Waste Act</h1>
                <div className='mt-6 text-md font-semibold p-1 ml-[32px]'>
                    <p>This Act makes provision with respect to measures to improve waste management practices, including:</p>
                </div>
                <div className='flex flex-wrap text-left w-[50vh] p-2'>
                    <ul className='list-disc p-2 ml-[15px]'>
                        <li>
                            minimizing the consumption of natural resources;
                        </li>
                        <li>
                            prevention and minimizing the generation of waste;
                        </li>
                        <li>
                            reducing, re-using, recycling and recovering waste;
                        </li>
                        <li>
                            treating and safely disposing of waste as a last resort;
                        </li>
                        <li>
                            preventing pollution and ecological degradation;
                        </li>
                        <li>
                            promoting and ensuring the effective delivery of waste services;
                        </li>
                        <li>
                            rehabilitating land where contamination presents, or may present, a significant risk of harm to health or the environment;
                        </li>
                        <li>
                            integrated waste management reporting and planning. &nbsp;
                            <a href="https://www.gov.za/sites/default/files/gcis_document/201409/34417gen435.pdf" class="link-button text-blue-500 underline">Learn more.</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*POPI*/}
            <div className='basis-[50%] border-dashed border-2 border-black bg-white rounded-3xl flex flex-wrap justify-center items-center text-darkGreen p-1'>
                <h1 className='text-2xl underline font-bold p-1'>Protection of Personal Information Act (POPIA)</h1>
                <div className='mt-6 text-md font-semibold p-1 ml-[32px]'>
                    <p>The POPI Act sets out the minimum standards regarding accessing and 'processing' of any personal information belonging to another.</p>
                </div>
                <div className='flex flex-wrap text-left w-[45vh] p-2'>
                    <div className='p-2 ml-[15px]'>
                        All organisations in South Africa (of any size) and individuals that are in a position to obtain, handle and store the personal information of another individual, whether it be in terms of their employment or as suppliers or service providers, must adhere to the requirements of the Act and implement steps to safeguard this information. Companies have 12 months to get their systems and processes in place to comply with the Act, in this case 1 July 2021. Non-compliance could result in not only reputational damage and/or potential civil damages claims, but punitive fines up to R10 million or 10 years imprisonment.&nbsp;
                        <a href="https://popia.co.za" class="link-button text-blue-500 underline">Learn more.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Regulations;
