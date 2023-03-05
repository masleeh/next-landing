import { IAuthPhone } from "@/types/form"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const TypeNumber:React.FC<IAuthPhone> = (props) => {
    return (
        <>
            <h2 className="auth-subtitle">Enter your phone number</h2>
            {/* <input
                className="auth-input number" 
                maxLength={15} 
                placeholder="+1 123 456 7890"
                value={props.number}
                ref={props.inputRef}
                onChange={(event) => props.handleChangeNumber(event)}/> */}
            <PhoneInput 
                countries={["GE", "US", "CA"]}
                value={props.number} 
                onChange={(event) => props.setNumber(event)}
                defaultCountry={"US"}
                className="auth-input number"
                limitMaxLength
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    props.handleKey(props.sendNumber, event)
                }}
                />
            {props.isWarn && <h4 className="auth-wrong">{props.errorMessage}</h4>}
            <button className="auth-send" onClick={() => props.sendNumber()} disabled={props.isLoading}>Send
                {props.isLoading && <div className="spinner"></div>}   
            </button>
            <h3 className="auth-note">You will receive SMS<br />verification code</h3>
        </>
    )
}


export default TypeNumber