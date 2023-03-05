import TypeNumber from "./TypeNumber"
import TypeCode from "./TypeCode"
import {useState, useRef, useEffect, useContext} from 'react'
import { formatNumber } from "@/hooks/useFormatNumber"
import Cookie from 'js-cookie'
import axios from 'axios'
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/context"
import useKeyEnter from "@/hooks/useKeyEnter"

const AuthForm = () => {
    const [isWarn, setIsWarn] = useState(false)
    const [pageNext, setPageNext] = useState(false)
    const [number, setNumber] = useState('')
    const [selectionStart, setSelectionStart] = useState<number | null>(0)
    
    const [code, setCode] = useState('')
    const [respCode, setRespCode] = useState('')
    
    const inputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const {getCookies, isLoading, setIsLoading, setErrorMessage, errorMessage} = useContext(GlobalContext)
    const {handleKey} = useKeyEnter()
    
    
    useEffect(() => {
        inputRef.current?.setSelectionRange(selectionStart, selectionStart)
    }, [selectionStart])
    
    const handleChangeNumber = (event:React.ChangeEvent<HTMLInputElement>) => {
        formatNumber(number, setNumber, event, setSelectionStart)
    }
    
    const sendNumber = async () => {
        setIsLoading(true)
        if (number.length < 12) {
            setIsWarn(true)
            setIsLoading(false)
            setErrorMessage("Your number is not correct")
            return
        } else {
            try {
                const response = await axios.post('http://137.184.177.18:16085/auth_sms', {
                    user_phone: number
                })
                console.log(response.data.sms_code)
                setRespCode(response.data.sms_code)
                setIsWarn(false)
                setIsLoading(false)
                setPageNext(true)
            } catch (error: any) {
                console.log(error.message)
                setErrorMessage("Your account doesn't exist")
                setIsWarn(true)
                setIsLoading(false)
            }
        }
    }

    const sendCode = async () => {
        setIsLoading(true)
        if (code.length < 6) {
            setIsWarn(true)
            return
        } else {
            if (respCode.toString() === code) {
                Cookie.set('aeix_phone', number, { expires: 2} )
                getCookies()
                setIsLoading(false)
                router.push("/account")
            } else {
                setIsLoading(false)
                setIsWarn(true)
            }
        }
    }
    
    return (
        <section className="auth-cont">
            <div className="auth">
                <h1 className="auth-title">Sign In</h1>
                {pageNext ? 
                    <TypeCode 
                        isWarn={isWarn}
                        code={code}
                        setCode={setCode}
                        sendCode={sendCode}
                        isLoading={isLoading}
                        handleKey={handleKey}
                    /> 
                    : <TypeNumber 
                        number={number}
                        handleChangeNumber={handleChangeNumber}
                        inputRef={inputRef}
                        sendNumber={sendNumber}
                        isWarn={isWarn}
                        setNumber={setNumber}
                        isLoading={isLoading}
                        handleKey={handleKey}
                        errorMessage={errorMessage}
                    />}
            </div>
        </section>
    )
}

export default AuthForm