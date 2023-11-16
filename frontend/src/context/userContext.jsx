import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const fetchUserProfile = () => {
        axios.get('/profile', { withCredentials: true })
        .catch(error => {
          if (error.response.status === 401) {
            // Token is expired, refresh it
            const refreshToken = getCookie('refreshToken');
            axios.post('/token', { token: refreshToken }, { withCredentials: true })
              .then(({ data }) => {
                // Save the new token
                const authToken = data.authToken;
      
                // Retry the /profile request with the new token
                axios.get('/profile', { headers: { 'Authorization': `Bearer ${authToken}` } })
                  .then(({ data }) => {
                    data.avatar = `/avatar/${data.id}`;
                    setUser(data);
                  })
              })
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