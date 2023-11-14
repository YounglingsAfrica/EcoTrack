import React, { useContext, useRef, useState } from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import defaultAvatar from "../../assets/User.png";
import Verified from "../../assets/verified.svg";
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { toast } from "react-hot-toast";

const UserProfile = () => {
    const {user, setUser} = useContext(UserContext);
    const [newPhoneNum, setNewPhoneNum] = useState(user?.newPhoneNum || "");
    const [newName, setNewName] = useState(user?.name || "");
    const [newPassword, setNewPassword] = useState(user?.password || "");
    const [newEmail, setNewEmail] = useState(user?.email || "");
    const fileInputRef = useRef();
    const handleUpdateName = () => {
        if (newName !== user?.name) {
            axios.post("/profile/update", { name: newName }, { withCredentials: true })
            .then(({data}) => {
                setUser(data);
                toast.success("Your name has been changed.")
            })
            .catch(error => {
                console.error(error);
                toast.error(error.response.data.message || "An error occurred while changing name");
            });
        }
    };
    
    const handleUpdatePassword = () => {
        axios.post("/profile/update", { password: newPassword }, { withCredentials: true })
            .then(({data}) => {
                setUser(data);
                toast.success("Your password has been changed.")
            })
            .catch(error => {
                console.error(error);
                toast.error(error.response.data.message || "An error occurred while changing password");
            });
    };
    
    const handleUpdatePhoneNumber = () => {
        axios.post("/profile/update", { phoneNumber: newPhoneNum }, { withCredentials: true })
            .then(() => {
                return axios.get("/profile", { withCredentials: true });
            })
            .then(({data}) => {
                setUser(data);
                toast.success("Your phone number has been changed.")
            })
            .catch(error => {
                console.error(error);
                toast.error(error.response.data.message || "An error occurred while changing phone number");
            });
    };

    const handleUpdateEmail = () => {
        axios.post("/profile/update", { email: newEmail }, { withCredentials: true })
            .then(({data}) => {
                setUser(data);
                toast.success("Your email has been changed.")
            })
            .catch(error => {
                console.error(error);
                toast.error(error.response.data.message || "An error occurred while changing email");
            });
    };

    const handleFileUpload = (e) => {
        const data = new FormData();
        const file = e.target.files[0];
        if(!file) {
            toast.error('No file selected');
            return; 
        }
        
        data.set('avatar', file);
        
        axios.post('/profile/avatar/', data) 
        .then(res => {
            toast.success('Avatar uploaded!');
        })
        .catch(err => {
        toast.error(err.response.data.message); 
        });
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='flex'>
            <div className='basis-[5%] h-[100vh] z-40'>
                <SideBar />
            </div>
            <div className='basis-[95%]'>
                <Dashboard />
                <div className='pt-[35px] px-[10px] z-0 h-[90vh]'>
                    <div className='flex flex-wrap text-center p-8 px-20'>
                        <div className='w-1/3 h-80 bg-white rounded-xl text-center border-2 border-black border-dashed p-10 mb-10'>
                            <form
                                encType='multipart/form-data' method='post' action='/profile/avatar' 
                                className='flex items-center justify-center mb-6'
                            >
                                <img
                                    src={user.avatar || defaultAvatar}
                                    alt="User"
                                    className='h-auto w-32 rounded-full cursor-pointer object-cover object-center' 
                                    title='Edit Avatar'
                                    onClick={handleImageClick}
                                />
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    name="avatar"
                                    accept=".png, .jpg, .jpeg"
                                    hidden
                                    onChange={handleFileUpload}
                                />
                            </form>
                            <h1 className='text-center text-2xl mb-3'>
                                {user?.name}
                            </h1>
                            <p className='flex justify-center items-center'>
                                {user?.phoneNumber} <span><img src={Verified} alt="verified" className='h-auto w-10 pt-2 pl-2' /></span>
                            </p>
                        </div>
                        <div className='w-[60.1%] h-80 bg-white rounded-xl border-2 border-black border-dashed p-10 ml-10'>
                            <h1 className='text-3xl text-center mb-10'>
                                General Information
                            </h1>
                            <div className='flex justify-center items-center'>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={e => setNewName(e.target.value)}
                                    className='w-1/2 h-14 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen text-center bg-primaryGreen50 placeholder:text-gray-700'
                                    placeholder={user?.name || "Enter your name"}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-12 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mt-12"
                                    onClick={handleUpdateName}
                                >
                                    Update Name
                                </button>
                            </div>
                        </div>
                        <div className='w-[96%] h-96 bg-white rounded-xl border-2 border-black border-dashed p-10'>
                            <h1 className='text-3xl text-center mb-16'>
                                Account Security
                            </h1>
                            <div className='grid grid-cols-3 '>
                                <div className='flex flex-col items-center'>
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={e => setNewEmail(e.target.value)}
                                        className='w-[80%] h-14 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen text-center bg-primaryGreen50 placeholder:text-gray-700'
                                        placeholder={user?.email || "Enter your email"}
                                    />         
                                    <button 
                                        className="flex items-center justify-center px-6 w-auto h-12 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mt-12"
                                        onClick={handleUpdateEmail}
                                    >
                                        Update Email 
                                    </button>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        className='bg-primaryGreen50 placeholder:text-gray-700 w-[80%] h-14 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen text-center'
                                        placeholder={user?.password || "Enter your password"}
                                    />
                                    <button 
                                        className="flex items-center justify-center px-6 w-auto h-12 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mt-12"
                                        onClick={handleUpdatePassword}
                                    >
                                        Update Password
                                    </button>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <input
                                        type="number"
                                        min={0}
                                        max={10}
                                        value={newPhoneNum}
                                        onChange={e => setNewPhoneNum(e.target.value)}
                                        className='bg-primaryGreen50 placeholder:text-gray-700 w-[80%] h-14 rounded-2xl border border-gray-400 p-5 focus:outline-primaryGreen text-center'
                                        placeholder={user?.phoneNumber || "Enter your phone number"}
                                    />
                                    <button 
                                        className="flex items-center justify-center px-6 w-auto h-12 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom mt-12"
                                        onClick={handleUpdatePhoneNumber}
                                    >
                                        Update Phone Number
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;