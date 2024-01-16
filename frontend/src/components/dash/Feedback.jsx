import React, { useState } from 'react';
import EcoLogo from '../../assets/eco_logo.png';
import axios from 'axios';
import toast from 'react-hot-toast';

const Feedback = () => {
  const [formData, setFormData] = useState({
    frequency: "",
    mostUsedFeature: "",
    improvementSuggestion: "",
    motivation: "",
    followUp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updateValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updateValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/feeback', formData)
      .then((response) => {
        if (response.status === 200) {
          console.log('Feedback Submitted');
          setFormData({
            frequency: "",
            mostUsedFeature: "",
            improvementSuggestion: "",
            motivation: "",
            followUp: false,
          })
          toast.success('Feedback Submitted')
        } else {
          console.error('Error submitting feedback')
          toast.error('Error submitting feedback')
        }
      }).catch((error) => {
        console.error('Network error:', error);
      })
  }

  return (
    <div className='pt-[25px] px-[50px]'>
      <div className='grid-cols-2 h-[85vh] gap-[25px] flex'>
        <div className='basis-[65%] flex-wrap bg-white rounded-lg p-6 px-14'>
            <h2 className='pb-8 text-4xl font-bold leading-snug flex items-center justify-center'>Help us improve</h2>
            <form onSubmit={handleSubmit}>
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text" 
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                placeholder='How often do you use our website?'
              />
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text"
                name='mostUsedFeature'
                value={formData.mostUsedFeature}
                onChange={handleChange}
                placeholder='What is your most used feature?'
              />
              <input 
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-20' 
                type="text" 
                name='improvementSuggestion'
                value={formData.improvementSuggestion}
                onChange={handleChange}
                placeholder='What would you like to see improved the most?'
              />
              <textarea
                className='border-b-2 border-gray-400 w-full focus:outline-none focus:border-primaryGreen mb-8' 
                type="text"
                name='motivation'
                value={formData.motivation}
                onChange={handleChange}
                placeholder='What is your motivation to use our website?'
              />
              <label className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-primaryGreen cursor-pointer" 
                  name="followUp"
                  checked={formData.followUp}
                  onChange={handleChange} 
                />
                  <span 
                    className="ml-2 text-sm font-medium text-darkGreen cursor-pointer underline"
                  >
                    Receive a personal follow-up to your feedback?
                  </span>
                </label>
              <button 
                className='flex items-center text-center justify-center px-6 w-56 h-14 mt-6 text-white rounded-xl bg-gradient-to-r from-black to-primaryGreen mx-auto shadow-right-bottom hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-out'
                type='submit'
              >
                <svg className='h-auto w-6 mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z" fill="rgba(255,255,255,1)"></path>
                </svg>
                  Submit Feedback
              </button>
            </form>
        </div>
        <div className='basis-[45%] h-[65vh] flex items-center justify-center m-8'>
          <img 
            className='h-full' 
            src={EcoLogo} 
            alt="Logo" 
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;