import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const fetchUserProfile = () => {
        axios.get("/profile", { withCredentials: true }).then(({data}) => {
            data.avatar = `/avatar/${data.id}`;
            setUser(data);
        }).catch(error => {
            if (error.response.status === 401) {    
                console.error("User is not authenticated");
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