import {useState, useEffect} from 'react'

const useFormModal = () => {
    const [isFormShown, setIsFormShown] = useState(false)

    useEffect(() => {
        if (isFormShown) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [isFormShown])

    return {isFormShown, setIsFormShown}
}

export default useFormModal