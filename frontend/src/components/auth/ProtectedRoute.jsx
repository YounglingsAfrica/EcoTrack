import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/profile")
            .then(res => {
                if (res.data) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
            }).catch(err => {
                setIsAuth(false);
            });
    }, []);

    useEffect(() => {
        if (isAuth === false) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (isAuth === null || isAuth === false) {
        return null;
    }

    return children;
}

export default ProtectedRoute;