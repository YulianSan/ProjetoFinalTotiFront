import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const StoreContext = createContext({})
export const useStoreContext = () => useContext(StoreContext)

export function UseStoreProvider({ children }) {
    const [token, setToken] = useLocalStorage('tokenStore');
    return (
        <StoreContext.Provider value={{ token, setToken }}>
            {children}
        </StoreContext.Provider>
    )
}
