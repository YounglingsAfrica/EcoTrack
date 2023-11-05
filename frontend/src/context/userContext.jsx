import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);

    // Disable react-hooks/exhaustive-deps for this useEffect
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (!user) {
            axios.get("/profile", { withCredentials: true }).then(({data}) => {
                setUser(data);
                console.log(data);
            })
        }
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}