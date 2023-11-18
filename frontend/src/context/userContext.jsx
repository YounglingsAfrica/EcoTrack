import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const fetchUserProfile = () => {
        axios.get('/profile', { withCredentials: true })
        .then(({ data }) => {
            data.avatar = `/avatar/${data.id}`;
            setUser(data);
        })
        .catch(error => {
            if (error.response && error.response.status === 403) {
                // Token is expired, refresh it
                axios.post('/token', {}, { withCredentials: true })
                .then(({ data }) => {
                    // Save the new token
                    const authToken = data.authToken;
                    navigate("/dashboard-b")
                    // Retry the /profile request with the new token
                    axios.get('/profile', { headers: { 'Authorization': `Bearer ${authToken}` }, withCredentials: true })
                    .then(({ data }) => {
                        data.avatar = `/avatar/${data.id}`;
                        setUser(data);
                    })
                })
                .catch(error => {
                    console.error(error);
                    navigate("/login")
                    // If refresh token is also expired, redirect to login page or handle appropriately
                });
            } else {
                console.error(error); 
            }
        });
    };
    
    useEffect(() => {
        fetchUserProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, fetchUserProfile}}>
            {children}
        </UserContext.Provider>
    )
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}