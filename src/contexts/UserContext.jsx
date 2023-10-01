import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const UserContext = createContext({})
export const useUserContext = () => useContext(UserContext)

export function UseUserProvider({ children }) {
    const [token, setToken] = useLocalStorage('token');
    return (
        <UserContext.Provider value={{ token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}
