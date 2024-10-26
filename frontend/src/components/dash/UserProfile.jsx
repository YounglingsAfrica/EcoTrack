import React, { useContext, useState } from 'react';
import SideBar from './SideBar.1';
import Dashboard from '../../pages/Dashboard';
import defaultAvatar from "../../assets/User.png";
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { toast } from "react-hot-toast";

const uploadPreset = "nhxmfptn";
const cloudName = "duvw77iju"

async function uploadImage(file) { 
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
            method: "POST",
            body: data,
        }
    );
    const img = await res.json();
    console.log(img);
    return img.secure_url;
}

const UserProfile = () => {
    const {user, setUser} = useContext(UserContext);
    const [newPhoneNum, setNewPhoneNum] = useState(user?.newPhoneNum || "");
    const [newName, setNewName] = useState(user?.name || "");
    const [newPassword, setNewPassword] = useState(user?.password || "");
    const [newEmail, setNewEmail] = useState(user?.email || "");
    const [formData, setFormData] = useState({
        img: ""
    });

    const [uploadingImg, setUploadingImg] = useState(false);

    const handleFileChange = async (e) => {
        const [file] = e.target.files;
        if (!file) return;
        setUploadingImg(true);

        const uploadedUrl = await uploadImage(file);
        setFormData({ ...formData, img: uploadedUrl });

        setUploadingImg(false);
        toast.success("Image Selected, Click 'Update' to upload")
    }

    const handleAvatarSubmit = async (e) => {
        e.preventDefault();
        if (uploadingImg) return;

        try {
            const response = await axios.post('/profile/avatar', {
                img: formData.img,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
        
            if (response.ok) {
                console.log('Image URL sent to the server!');
                setFormData({ img: '' });
                toast.success("Your Avatar has been updated!")
            } else {
                console.error('Failed to send image URL to the server');
            }
        } catch (error) {
            console.error('Failed to send image URL to the server', error);
        }
    };
    
    const handleUpdateName = (e) => {
        e.preventDefault();
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
    
    const handleUpdatePassword = (e) => {
        e.preventDefault();
        axios.post("/profile/update", { password: newPassword }, { withCredentials: true })
            .then(({data}) => {
                setUser(data);
                toast.success("Your password has been updated!")
            })
            .catch(error => {
                console.error(error);
                toast.error(error.response.data.message || "An error occurred while changing password");
            });
    };
    
    const handleUpdatePhoneNumber = (e) => {
        e.preventDefault();
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

    const handleUpdateEmail = (e) => {
        e.preventDefault();
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

    return (
        <div className='flex'>
            <div className='basis-[4%] h-[100vh] z-40'>
                <SideBar />
            </div>
            <div className='basis-[96%]'>
                <Dashboard />
                <div className='pt-[35px] px-[10px] z-0 h-[90vh]'>
                    <div className="mx-auto max-w-270">
                            <div className="m-10 mt-0 grid grid-cols-5 gap-8">
                            <div className="col-span-5 xl:col-span-3">
                                <div className="rounded-md border-white/20 border-2 bg-darkGreen/75">
                                <div className="border-b border-white/20 py-4 px-7">
                                    <h3 className="font-medium text-lg text-white">
                                        Personal Information
                                    </h3>
                                </div>
                                <div className="p-7">
                                    <form>
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <div className='flex flex-row justify-between'>        
                                                <label
                                                    className="mb-3 block text-md font-medium text-white"
                                                    htmlFor="fullName"
                                                >
                                                    Full Name
                                                </label>
                                                <button 
                                                    className='mr-2 mb-3 hover:underline text-xs text-white/20'
                                                    onClick={handleUpdateName}
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        <div className="relative">
                                            <span className="absolute left-4 top-4">
                                            <svg
                                                className="fill-white"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                                    fill=""
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                                    fill=""
                                                />
                                                </g>
                                            </svg>
                                            </span>
                                            <input
                                                className="w-full rounded border bg-gray py-3 pl-12 pr-5 focus-visible:outline-none border-white/20 bg-primaryGreen/20 text-white focus:border-primaryGreen"
                                                type="text"
                                                value={newName}
                                                onChange={e => setNewName(e.target.value)}
                                                name="fullName"
                                                id="fullName"
                                                placeholder={user?.name}
                                                defaultValue={user?.name}
                                            />

                                        </div>
                                        </div>

                                        <div className="w-full sm:w-1/2">
                                            <div className='flex flex-row justify-between'>
                                                <label
                                                    className="mb-3 block text-md font-medium text-white"
                                                    htmlFor="phoneNumber"
                                                >
                                                    Phone Number
                                                </label>
                                                <button 
                                                    className='mr-2 mb-3 hover:underline text-xs text-white/20'
                                                    onClick={handleUpdatePhoneNumber}
                                                >
                                                    Update
                                                </button>
                                            </div>

                                        <input
                                            className="w-full rounded border bg-gray py-3 px-5 text-white border-white/20 bg-primaryGreen/20 focus-visible:outline-none focus:border-primaryGreen"
                                            type="number"
                                            min={0}
                                            max={10}
                                            value={newPhoneNum}
                                            onChange={e => setNewPhoneNum(e.target.value)}
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            placeholder={user?.phoneNumber}
                                            defaultValue={user?.phoneNumber}
                                        />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className='flex flex-row justify-between'>
                                            <label
                                                className="mb-3 block text-sm font-medium text-white"
                                                htmlFor="emailAddress"
                                            >
                                                Email Address
                                            </label>
                                            <button 
                                                className='mr-2 mb-3 hover:underline text-xs text-white/20'
                                                onClick={handleUpdateEmail}
                                            >
                                                Update
                                            </button>
                                        </div>

                                        <div className="relative">
                                        <span className="absolute left-4 top-4">
                                            <svg
                                            className="fill-white"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <g opacity="0.8">
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                                                fill=""
                                                />
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                                fill=""
                                                />
                                            </g>
                                            </svg>
                                        </span>
                                        <input
                                            className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primaryGreen border-white/20 bg-primaryGreen/20"
                                            type="email"
                                            value={newEmail}
                                            onChange={e => setNewEmail(e.target.value)}
                                            name="emailAddress"
                                            id="emailAddress"
                                            placeholder={user?.email}
                                            defaultValue={user?.email}
                                        />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className='flex flex-row justify-between'>
                                            <label
                                                className="mb-3 block text-sm font-medium text-white"
                                                htmlFor="Password"
                                            >
                                                Password
                                            </label>
                                            <button 
                                                className='mr-2 mb-3 hover:underline text-xs text-white/20'
                                                onClick={handleUpdatePassword}
                                            >
                                                Update
                                            </button>
                                        </div>
                                        <input
                                            className="w-full rounded border bg-gray py-3 px-5 text-white border-white/20 bg-primaryGreen/20 focus-visible:outline-none focus:border-primaryGreen"
                                            type="password"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                            name="Password"
                                            id="Password"
                                            placeholder="Enter your new password"
                                        />
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <div className="col-span-5 xl:col-span-2">
                                <div className="rounded-md border-2 border-white/20 bg-darkGreen/75 shadow-default border-strokedark bg-boxdark">
                                <div className="border-b border-stroke py-4 px-7 border-white/20">
                                    <h3 className="font-medium text-lg text-white">
                                    Your Photo
                                    </h3>
                                </div>
                                <div className="p-7">
                                    <form 
                                        onSubmit={handleAvatarSubmit}
                                        encType='multipart/form-data'
                                    >
                                    <div className="mb-8 flex items-center gap-3">
                                        <div className="h-14 w-14 rounded-full">
                                            <img src={user?.avatar || defaultAvatar} alt="User" className='rounded-full' />
                                        </div>
                                        <div>
                                            <span className="text-white">
                                                Edit your photo
                                            </span>
                                            <span className="flex gap-3">
                                                <button className="text-xs hover:underline text-white/20">
                                                    Update
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="FileUpload"
                                        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 bg-meta-4 sm:py-7.5"
                                    >
                                        <input
                                            type="file"
                                            name='avatar'
                                            accept="image/*"
                                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                            onChange={handleFileChange}
                                        />
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white border-strokedark bg-boxdark">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                                    fill="#3C50E0"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                                    fill="#3C50E0"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                                    fill="#3C50E0"
                                                />
                                                </svg>
                                            </span>
                                            <p className='text-white'>
                                                <span className="text-primaryGreen">Click to upload</span> or
                                                drag and drop
                                            </p>
                                            <p className="mt-2 text-white">SVG, PNG, JPG or GIF</p>
                                            <p className='text-white'>(max, 800 X 800px)</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-5">
                                        <button
                                            className="flex justify-center rounded-md bg-primary mt-4 py-2 px-6 font-medium text-white hover:bg-primaryGreen/10 duration-300"
                                            type="submit"
                                            disabled={uploadingImg}
                                        >
                                            Update
                                        </button>
                                    </div>
                                    </form>
                                </div>
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