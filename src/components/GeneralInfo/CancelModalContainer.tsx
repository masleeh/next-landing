import {useState, useEffect} from 'react'

interface CancelModal {
    toggleForm: Function,
    logOut: Function
}


const CancelModalContainer:React.FC<CancelModal> = (props) => {

    useEffect(() => {
        const handleClickOutside = (event:Event) => {
            if (event.target === document.querySelector('.modal')) props.toggleForm(false)
        }

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                props.toggleForm(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    return (
        <div className="modal">
            <div className='form'>
                <h2 className='form-title'>Your subscription <br /> has been successfully cancelled</h2>
                <h2 className='form-label2'>We would like to inform you that you are still eligible to use our services until the expiration date. </h2>
                <button className='form-submit' onClick={() => {
                    props.toggleForm(false)
                    props.logOut()
                    }}>Got it</button>
            </div>
        </div>
    )
}

export default CancelModalContainer