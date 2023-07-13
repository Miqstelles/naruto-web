import { useEffect, useState } from "react";

export function usePageSize() {
    const [screenSize, setScreenSize] = useState({
        dynamicWidth: window.innerWidth,
    })

    const setDimension = () => {
        setScreenSize({
            dynamicWidth: window.innerWidth,
        })
    }

    useEffect(() => {
        const handleResize = () => {
            setDimension()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return screenSize.dynamicWidth
}
