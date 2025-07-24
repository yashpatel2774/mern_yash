import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("")

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    }


    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }


    // JWT Authentication - to get the userDAta

    const userAuthentication = async () =>{
        try {
            const response = await fetch("http://localhost:3000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                console.log("User Data: ", data.userData)
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data")
        }

    }

    useEffect(()=>{
        userAuthentication();
    },[])


    return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user }}>
        {children}
    </AuthContext.Provider>
    );
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if(!authContextValue) {
        throw new Error("useAuth used Outside of the Provider"); 
    }
    return authContextValue;
} 