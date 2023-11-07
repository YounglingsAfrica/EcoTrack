import React, { useEffect, useState } from 'react';
import X from "../../assets/x-mark.png";
import Eco from "../../assets/ecoeco.png";
import Logo from "../../assets/eco_logo.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ConfirmEmail = () => {
    const [status, setStatus] = useState("Verifying...");
    const { token } = useParams();

    useEffect(() => {
        axios.get(`/confirm/${token}`, { withCredentials: true })
            .then(res => {
                console.log('Response from backend:', res.data);
                setStatus(res.data.message);
            })
            .catch(err => {
                setStatus("An error ocurred");
            })
    }, [token]);

    return (
        <div className="min-h-screen pt-40 bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-2xl mx-auto drop-shadow-xl overflow-hidden">
                    {/* Subscription start */}
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <Link to="/">
                            <img src={X} alt="exit" className='h-auto w-4 absolute top-4 left-4 hover:scale-75 duration-300' />
                        </Link> 
                        <img src={Logo} alt="Eco" className='mx-auto w-32' />
                        <h2 className="text-3xl mb-6 mt-6 text-center">Confirming your email address..</h2>
                        <p className="mb-4 text-center text-sm">
                            {status}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-auto h-full object-cover' src={Eco} alt="Eco" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmEmail;