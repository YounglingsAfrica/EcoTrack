import React, { useState, useEffect } from 'react';
import RecycleImage from '../../assets/recycle.png';

const PopupRecycle = ({visible, onClose}) => {
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        if (visible){
            setTimeout(() => {
                setPopupVisible(true);
            }, 300);
        }else{
            setPopupVisible(false);
        }
    }, [visible]);

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose();
    };

    if (!popupVisible) return null;

  return (
    <div 
        id='container' 
        onClick={handleOnClose} 
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center 
        ${popupVisible ? 'animate-phase-in' : 'animate-phase-out'}`}>
        <div className='bg-white rounded-md border-dashed border-2 border-black'>
            <div className='bg-[#F8F9FC] flex items-center justify-between h-16 rounded-md py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] text-xl font-bold'>
                <h2>RECYCLE</h2>
                <img className='h-full' src={RecycleImage} alt="" />
            </div>
        <div className='flex flex-wrap text-left w-[50vh] font-semibold p-4'>
            <ul className='list-disc p-2'>
                <li>
                    Buy products made from recycled material. Look for the recycling symbol or ask store managers or salesmen.
                </li>
                <li>
                    Check collection centers and curbside pickup services to see what they accept, and begin collecting those materials. These can include metal cans, newspapers, paper products, glass, plastics and oil.
                </li>
                <li>
                    Consider purchasing recycled materials at work when purchasing material for office supply, office equipment or manufacturing.
                </li>
                <li>
                    Buy products made from material that is collected for recycling in your community.
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default PopupRecycle;