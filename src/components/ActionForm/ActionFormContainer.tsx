import {useState, useEffect, useRef, useContext} from 'react'
import ActionForm from "./ActionForm/ActionForm"
import { ISetFormShow } from "@/types/form"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
import useKeyEnter from '@/hooks/useKeyEnter'


const ActionFormContainer:React.FC<ISetFormShow> = (props) => {

    
    const {handleKey} = useKeyEnter()
    const [isWarn, setIsWarn] = useState(false)
    const {isLoading, setIsLoading, errorMessage, setErrorMessage} = useContext(GlobalContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [agree, setAgree] = useState(true)
    const [selectionStart, setSelectionStart] = useState<number | null>(0)

    const inputRef = useRef<HTMLInputElement | null>(null)

    // Handling input changes
    const changeName = (event:React.ChangeEvent<HTMLInputElement>) => setName(event?.target.value)
    const changeEmail = (event:React.ChangeEvent<HTMLInputElement>) => setEmail(event?.target.value)
    const changePhone = (event:React.ChangeEvent<HTMLInputElement>) => {
        // formatNumber(phone, setPhone, event, setSelectionStart)
        setPhone(event.target.value)
    }

    const handleAgree = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAgree(!agree)
    }

    useEffect(() => {
        inputRef.current?.setSelectionRange(selectionStart, selectionStart)
    }, [selectionStart])

    // Closing modal window
    useEffect(() => {
        const handleClickOutside = (event:Event) => {
            if (event.target === document.querySelector('.modal')) props.toggleForm(false)
        }

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                sendData()
            }
        }
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [name, phone, email])


    // Sending form data
    const sendData = async (event?:React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
        setIsLoading(true)
        if (event) event.preventDefault()
        if (name.length < 1 || !phone || phone.length < 12) {
            console.log(name.length, phone.length, email.length)
            setErrorMessage("Please input both your name and phone number")
            setIsLoading(false)

            return setIsWarn(true)
        }
        if (!agree) {
            setErrorMessage("Please reach an agreement before making a purchase. ")
            setIsLoading(false)
            setIsWarn(true)
            return
        }
        try {
            const  response = await axios.post('http://137.184.177.18:16085/create-checkout-session', {
                user_name: name,
                user_phone: phone,
                user_email: email
            })
            console.log(response.data)
            setIsLoading(false)
            window.location = response.data.url
            
        } catch (error:any) {
            console.log(error.message)
            setIsLoading(false)
        }


        
        
    }

    return (
        <div className="modal">
            <img className='modal-x' src='/images/x.svg'  alt='' onClick={() => props.toggleForm(false)}/>
            <ActionForm 
                name={name}
                phone={phone}
                email={email}
                changeName={changeName}
                changeEmail={changeEmail}
                changePhone={changePhone}
                inputRef={inputRef}
                isWarn={isWarn}
                sendData={sendData}
                setPhone={setPhone}
                isLoading={isLoading}
                handleKey={handleKey}
                agree={agree}
                handleAgree={handleAgree}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
            />
        </div>
    )
}

export default ActionFormContainer