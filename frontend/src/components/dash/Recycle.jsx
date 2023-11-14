import React, { useState } from 'react';
import RecycleImage from '../../assets/recycle-transparent-12.png';
import Popup from './Popup';
import PopupReuse from './PopupReuse';
import PopupRecycle from './PopupRecycle';

const Recycle = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [showPopupReuse, setShowPopupReuse] = useState(false);
    const [showPopupRecycle, setShowPopupRecycle] = useState(false);

    const handleOnClose = () => setShowPopup(false);
    const handleOnCloseReuse = () => setShowPopupReuse(false);
    const handleOnCloseRecycle = () => setShowPopupRecycle(false);

  return (
    <div className='pt-[25px] px-[50px]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-white text-lg font-bold leading-[34px]'>Recycling 101</h1>
        </div>
        <div className='flex mt-[22px] w-full gap-[30px] h-[35vh]'>
            <div className='basis-[36%] border-dashed border-2 border-black bg-white shadow-md rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-center py-[15px] px-[20px] 
                    border-b-[1px] border-[#EDEDED] text-xl font-bold'>
                    <h2>Rule 1</h2>
                </div>
                <div className='flex items-center justify-center mt-[15px] text-lg font-medium'>
                    <p>Recycle bottles, cans, paper and cardboard.</p>
                </div>
                <div className='flex items-center justify-center h-32 mt-[15px]'>
                    <img className='h-full transition-opacity duration-500 ease-in' src={RecycleImage} alt="" />
                </div>
            </div>
            <div className='basis-[36%] border-dashed border-2 border-black bg-white shadow-md rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-center py-[15px] px-[20px] 
                    border-b-[1px] border-[#EDEDED] text-xl font-bold'>
                    <h2>Rule 2</h2>
                </div>
                <div className='flex items-center justify-center mt-[15px] text-lg font-medium'>
                    <p>Keep foods and liquids out of your recycling.</p>
                </div>
                <div className='flex items-center justify-center h-32 mt-[15px]'>
                    <img className='h-full' src={RecycleImage} alt="" />
                </div>
            </div>
            <div className='basis-[36%] border-dashed border-2 border-black bg-white shadow-md rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-center py-[15px] px-[20px] 
                    border-b-[1px] border-[#EDEDED] text-xl font-bold'>
                    <h2>Rule 3</h2>
                </div>
                <div className='flex items-center justify-center mt-[15px] text-lg font-medium'>
                    <p>No loose plastic bags or bagged recyclables.</p>
                </div>
                <div className='flex items-center justify-center h-32 mt-[15px]'>
                    <img className='h-full' src={RecycleImage} alt="" />
                </div>
            </div>
        </div>
        <div>
            <h1 className='mt-[25px] text-white text-2xl font-bold leading-[34px]'>The 3Rs Rule</h1>
        </div>
        <div className='mt-[5px] border-2 rounded-lg'>
                <div className='bg-[#F8F9FC] py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] bg-darkGreen rounded-lg'>
                    <div className='grid grid-cols-3 gap-[25px] gap-y-0 flex items-center justify-between text-white text-xl font-bold'>
                        <h2>Reduce</h2>
                        <h2>Reuse</h2>
                        <h2>Recycle</h2>
                        <div></div>
                    </div>
                    <div className='grid grid-cols-3 gap-[25px] flex items-center justify-between'>
                        <div className='basis-[25%] mt-[15px] border-2 bg-recycleGreen shadow-md cursor-pointer 
                        rounded-[4px] px-[20px] h-[18vh] py-[5px] font-medium' onClick={() => setShowPopup(true)}>
                            <p>Reducing unnecessary consumption and minimizing the generation of waste are essential steps 
                                towards achieving a more sustainable and environmentally conscious society.</p>
                        </div>
                        <div className='basis-[25%] mt-[15px] border-2 bg-recycleGreen shadow-md cursor-pointer 
                        rounded-[4px] px-[20px] h-[18vh] py-[5px] font-medium' onClick={() => setShowPopupReuse(true)}>
                            <p>Reusing everything we can and sharing reusable items with others or institutions is a 
                                fundamental aspect of reducing waste and promoting sustainable practices.</p>
                        </div>
                        <div className='basis-[25%] mt-[15px] border-2 bg-recycleGreen shadow-md cursor-pointer 
                        rounded-[4px] px-[20px] h-[18vh] py-[5px] font-medium' onClick={() => setShowPopupRecycle(true)}>
                            <p>Recycling is a series of steps that takes a used material and processes, remanufactures, 
                                and sells it as a new product. Begin recycling at home and at work.</p>
                        </div>
                        <div></div>
                    </div>
                    <Popup onClose={handleOnClose} visible={showPopup}/>
                    <PopupReuse onClose={handleOnCloseReuse} visible={showPopupReuse} />
                    <PopupRecycle onClose={handleOnCloseRecycle} visible={showPopupRecycle} />
                </div>
            </div>
    </div>
  )
}

export default Recycle;
