import React, { useState, useEffect } from 'react';
import ReuseImage from '../../assets/reuse.png';

const PopupReuse = ({visible, onClose}) => {
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
                <h2>REUSE</h2>
                <img className='h-full' src={ReuseImage} alt="" />
            </div>
        <div className='flex flex-wrap text-left w-[50vh] font-semibold p-4'>
            <ul className='list-disc p-2'>
                <li>
                    Reuse products for the same purpose. Save paper and plastic bags, and repair broken appliances, furniture and toys.
                </li>
                <li>
                    Reuse products in different ways. Use a coffee can to pack a lunch; use plastic microwave dinner trays as picnic dishes.
                </li>
                <li>
                    Sell old clothes, appliances, toys, and furniture in garage sales or ads, or donate them to charities.
                </li>
                <li>
                    Use resealable containers rather than plastic wrap.
                </li>
                <li>
                    Use a ceramic coffee mug instead of paper cups.
                </li>
                <li>
                    Reuse grocery bags or bring your own cloth bags to the store. Do not take a bag from the store unless you need one.
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default PopupReuse;
