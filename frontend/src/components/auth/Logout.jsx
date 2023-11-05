import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import X from "../../assets/x-mark.png";
import Logo from "../../assets/eco_logo.png";
import Eco from "../../assets/ecoeco.png";
import { useContext } from 'react';
import { UserContext } from "../../context/userContext";
import { toast } from "react-hot-toast";

const Logout = () => {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/logout", {
                method: "GET",
                credentials: "include"
            });
    
            if (response.ok) {
                toast.success(`${user.name} has logged out.`)
                setUser(null);
                navigate("/")
            } else {
                console.error("Logout failed, please try again")
                toast.error("Logout failed, please try again")
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="min-h-screen pt-40 bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <Link to="/dashboard-b">
                            <img src={X} alt="exit" className='h-auto w-4 absolute top-4 left-4 hover:scale-75 duration-300' />
                        </Link> 
                        <img src={Logo} alt="Eco" className='mx-auto w-32' />
                        <h2 
                            className="text-3xl mb-6 mt-6 text-center"
                        >
                            Hi {user.name}, are you sure you want to Logout?</h2>
                        <p className="mb-4 text-center text-sm">
                            You can always log back in at any time, thank you for using our platform. See you soon.
                        </p>
                        <form onSubmit={handleLogout}>
                            <div className="mt-6 flex justify-center">
                                <button 
                                    className="flex items-center justify-center px-6 w-auto h-10 text-white rounded-lg bg-gradient-to-r from-black to-primaryGreen shadow-right-bottom"
                                >
                                    Logout
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Register form start */}
                    <div className='w-1/2'>
                        <img className='w-auto h-full object-cover' src={Eco} alt="Eco" />
                    </div>
                    {/* Register form end */}
                </div>
            </div>
        </div>
    )
}

export default Logout;