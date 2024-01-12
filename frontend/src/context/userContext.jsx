import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const fetchUserProfile = () => {
        axios.get('/profile', { withCredentials: true })
        .then(({ data }) => {
            // Fetch the signed URL
            axios.get(`/avatar/${data._id}`, { withCredentials: true })
                .then(({ request: { responseURL } }) => {
                    data.avatar = responseURL;
                    setUser({ ...data, avatar: responseURL});
                })
                .catch(error => {
                    console.error(error);
                });
        })
        .catch(error => {
            console.error(error); 
        })
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