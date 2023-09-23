import { useState } from "react";

export function useLocalStorage(key, initial = null) {
    const [data, setData] = useState(initial ?? localStorage.getItem(key))

    const saveData = (value) => {
        localStorage.setItem(key, value)
        setData(value)
    }

    return [data, saveData]
}
