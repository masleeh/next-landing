import { createContext, PropsWithChildren, useState, useEffect } from "react";
import Cookie from 'js-cookie'

export const GlobalContext = createContext<any>(null!)

const GlobalContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [auth, setAuth] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const getCookies = () => {
        const cookie = Cookie.get('aeix_phone')
        if (cookie) {
            setAuth(cookie)
        }
        else {
            setAuth('')
        }
    }

    useEffect(() => {
        getCookies()
    }, [])

    const value:any = {
        isLoading,
        setIsLoading,
        auth, 
        setAuth,
        getCookies,
        errorMessage,
        setErrorMessage
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider