import React, { useState, useEffect } from 'react';
import ReduceImage from '../../assets/reduce.png';

const Popup = ({visible, onClose}) => {
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
            <h2>REDUCE</h2>
            <img className='h-full' src={ReduceImage} alt="" />
        </div>
        <div className='flex flex-wrap text-left w-[50vh] font-semibold p-4'>
            <ul className='list-disc p-2'>
                <li>
                    Buy products in bulk. Larger, economy-size products or ones in concentrated form use less packaging and usually cost less per ounce.
                </li>
                <li>
                    Avoid over-packaged goods, especially ones packed with several materials such as foil, paper, and plastic. They are difficult to recycle, plus you pay more for the package.
                </li>
                <li>
                    Avoid disposable goods, such as paper plates, cups, napkins, razors, and lighters. Throwaways contribute to the problem, and cost more because they must be replaced again and again.
                </li>
                <li>
                    Buy durable goods - ones that are well-built or that carry good warranties.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
