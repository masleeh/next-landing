export interface ISetFormShow {
    toggleForm: Function,
    isShown: boolean,
    stripe?: any
}

export interface IFormProps {
    name: string,
    phone: string;
    email: string,
    changeName: Function,
    changeEmail: Function,
    changePhone: Function,
    inputRef: React.RefObject<HTMLInputElement>,
    isWarn: boolean,
    sendData: Function,
    setPhone: Function,
    isLoading: boolean,
    handleKey: Function,
    agree: boolean,
    handleAgree: Function,
    errorMessage: string,
    setErrorMessage: Function
}

export interface IAuthPhone {
    number: string,
    handleChangeNumber: Function,
    inputRef: React.RefObject<HTMLInputElement>,
    sendNumber: Function,
    isWarn: boolean,
    setNumber: Function,
    isLoading?:boolean,
    handleKey: Function,
    errorMessage: string
}

export interface IAuthCode {
    code: string,
    setCode: Function,
    isWarn: boolean,
    sendCode: Function,
    isLoading?: boolean,
    handleKey: Function
}

export interface IPersonal {
    userName: string,
    phoneNumber: string,
    paidTill: string,
    logOut: Function,
    cancelSubscription: Function,
    isLoading: boolean,
}