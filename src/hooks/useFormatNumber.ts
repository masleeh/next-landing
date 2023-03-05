export const formatNumber = (phone:string, setPhone: Function, event: React.ChangeEvent<HTMLInputElement>, setSelectionStart: Function) => {
    const oldValue = phone
    let number = event.target.value
    let first = '', second = '', third = ''
    if (number.length > oldValue.length) {
        if (number.replace(/(\D+)/g, '').length === oldValue.replace(/(\D+)/g, '').length) setPhone(oldValue)
        else {
            number = number.replace(/(\D+)/g, '')
            first = number.substring(0, 3)
            second = number.substring(3, 6)
            third = number.substring(6, 10)
            if (number.length > 6) {
                number = first + " " + second + ' ' + third
            }
            else if (number.length > 3 ){
                number = first + ' ' + second
            }
            else {
                number = first
            }
        
            setPhone(number)
            if (event.target.selectionStart === 4 || event.target.selectionStart === 7) setSelectionStart(event.target.selectionStart + 1)
            else setSelectionStart(event.target.selectionStart)
        }
    } else if (number.length < oldValue.length) {
        setPhone(number)
    }

    
} 