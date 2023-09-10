import { useEffect } from "react";

export function useTitle(title){
    useEffect(() => {
        document.title = `Mayu | ${title}`
    }, [title])
}
