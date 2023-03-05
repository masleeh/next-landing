import { IAuthCode } from "@/types/form"

const TypeCode:React.FC<IAuthCode> = (props) => {
    return (
        <>
            <h2 className="auth-subtitle">Enter your SMS code</h2>
            <input 
                className="auth-input code" 
                maxLength={6} 
                placeholder="123456" 
                value={props.code} 
                onChange={(event) => props.setCode(event.target.value)}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                    props.handleKey(props.sendCode, event)
                }}
                />
            <button className="auth-send" onClick={() => props.sendCode()}>Send
                {props.isLoading && <div className="spinner"></div>}
            </button>
            {props.isWarn && <h4 className="auth-wrong">Please, provide correct data</h4>}
            {/* <h3 className="auth-note">You will receive SMS<br />verification code</h3> */}
        </>
    )
}


export default TypeCode