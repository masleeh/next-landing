import { IFormProps } from "@/types/form"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Link from "next/link"

const ActionForm:React.FC<IFormProps> = (props) => {
    return (
        <form className="form" id="form">
            <h2 className="form-title">Complete the form in order to initiate the process.</h2>
            <h3 className="form-label">Your name:</h3>
            <input className="form-input" type="text" value={props.name} 
                onChange={(event) => props.changeName(event)} placeholder="John Doe"
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    props.handleKey(props.sendData, event)
                }}/>
            <h3 className="form-label">Phone number:</h3>
            {/* <input className="form-input" maxLength={12} type="tel" value={props.phone} 
                onChange={(event) => props.changePhone(event)}
                placeholder="123 123 1234"
                ref={props.inputRef}
            /> */}
            <PhoneInput 
                countries={["GE", "US", "CA"]}
                value={props.phone} 
                onChange={(event) => props.setPhone(event)}
                defaultCountry={"US"}
                className="form-input"
                limitMaxLength
                placeholder="(234) 567-8900"
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    props.handleKey(props.sendData, event)
                }}
                />
            {/* <h3 className="form-label">Email:</h3>
            <input className="form-input" type="email" value={props.email} 
                onChange={(event) => props.changeEmail(event)} placeholder="example@mail.com"
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    props.handleKey(props.sendData, event)
                }}/> */}
            {props.isWarn && <h4 className="form-warning">{props.errorMessage}</h4>}
            <label className="form-checkbox-label">
                <input 
                    type="checkbox"
                    checked={props.agree}
                    onChange={(event) => props.handleAgree(event)}
                    className="form-checkbox"
                />
                I agree with &nbsp; <Link href="user_agreement.pdf" locale='/public/user_agreement.pdf' target="_blank"> terms and conditions</Link>
            </label>
            <button className="form-submit" onClick={(event) => props.sendData(event)} disabled={props.isLoading}>Subscribe
                {props.isLoading && <div className="spinner"></div>}
            </button>
        </form>
    )
}

export default ActionForm